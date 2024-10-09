import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Button from "../components/Button";
import correctSound from "../assets/correct.wav"; 
import incorrectSound from "../assets/incorrect.wav";
import backgroundMusic from "../assets/background.mp3";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null); 
  const timerRef = useRef(null);
  const audioRef = useRef(new Audio()); 
  const backgroundMusicRef = useRef(new Audio(backgroundMusic)); 

  
  const fetchQuestions = async () => {
    try {
      const response = await axios.get(
        "https://opentdb.com/api.php?amount=10&category=31"
      );
      setQuestions(response.data.results);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  useEffect(() => {
    const storedIndex = localStorage.getItem("currentQuestionIndex");
    const storedAnswers = JSON.parse(localStorage.getItem("userAnswers"));
    const storedTime = localStorage.getItem("timeLeft");
    const storedShowResults = localStorage.getItem("showResults");
    const storedCorrectAnswers = JSON.parse(
      localStorage.getItem("correctAnswersCount")
    );

    if (storedIndex) {
      setCurrentQuestionIndex(Number(storedIndex));
    }

    if (storedAnswers) {
      setUserAnswers(storedAnswers);
    }

    if (storedTime) {
      setTimeLeft(Number(storedTime));
    }

    if (storedShowResults === "true") {
      setShowResults(true);
    }

    if (storedCorrectAnswers) {
      setCorrectAnswersCount(storedCorrectAnswers);
    }

    backgroundMusicRef.current.loop = true; 
    backgroundMusicRef.current.play();
    startTimer();

    return () => {
      clearInterval(timerRef.current);
      backgroundMusicRef.current.pause(); 
      backgroundMusicRef.current.currentTime = 0;
    }
  }, []);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerRef.current);
          handleEndQuiz();
          return 0;
        }
        const newTime = prevTime - 1;
        localStorage.setItem("timeLeft", newTime);
        return newTime;
      });
    }, 1000);
  };

  const playSound = (isCorrect) => {
    audioRef.current.src = isCorrect ? correctSound : incorrectSound;
    audioRef.current.play();
  };

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer); 
    const isCorrect = answer === questions[currentQuestionIndex].correct_answer;
    playSound(isCorrect);

    const updatedAnswers = [...userAnswers, answer];
    setUserAnswers(updatedAnswers);

    let correctCount =
      JSON.parse(localStorage.getItem("correctAnswersCount")) || 0;
    if (isCorrect) {
      correctCount += 1;
      localStorage.setItem("correctAnswersCount", correctCount);
      setCorrectAnswersCount(correctCount);
    }

    localStorage.setItem("userAnswers", JSON.stringify(updatedAnswers));
    localStorage.setItem("currentQuestionIndex", currentQuestionIndex + 1);

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        handleEndQuiz();
      }
      setSelectedAnswer(null); 
    }, 500); 
  };

  const handleEndQuiz = () => {
    setShowResults(true);
    localStorage.setItem("showResults", "true");
    clearInterval(timerRef.current);
    localStorage.removeItem("currentQuestionIndex");
    localStorage.removeItem("userAnswers");
    localStorage.removeItem("timeLeft");
  };

  const handleRestartQuiz = async () => {
    localStorage.removeItem("currentQuestionIndex");
    localStorage.removeItem("userAnswers");
    localStorage.removeItem("timeLeft");
    localStorage.removeItem("showResults");
    localStorage.removeItem("correctAnswersCount");

    await fetchQuestions();
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setShowResults(false);
    setTimeLeft(60);
    setCorrectAnswersCount(0);

    
    startTimer();
  };

  const renderQuestion = () => {
    if (questions.length === 0) {
      return <p>Loading questions...</p>;
    }

    const question = questions[currentQuestionIndex];
    const cleanQuestion = question.question
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .replace(/&eacute;/g, "é")
      .replace(/&amp;/g, "&");

    return (
      <div className="flex flex-col">
        <div className="fixed top-0 left-0 right-0 flex p-4 md:p-10 justify-between w-full md:text-3xl font-extrabold text-white text-shadow">
          <div>
            <p>&#9203; {timeLeft}s</p>
          </div>
          <div>
            <p>
              Question {currentQuestionIndex + 1} of {questions.length}
            </p>
          </div>
          <div>
            <p>Answered: {userAnswers.length}</p>
          </div>
        </div>

        <div className="flex bg-white md:mx-10 md:mt-28 mt-20 mx-4 shadow-md rounded-lg p-4 min-h-32 items-center justify-center">
          <h2 className="text-xl font-bold">{cleanQuestion}</h2>
        </div>

    
        <div className="md:m-10 pt-10 mx-4">
          <div className="space-y-2">
            {question.incorrect_answers
              .concat(question.correct_answer)
              .map((answer, index) => {
                const isCorrect = answer === question.correct_answer;
                const isSelected = selectedAnswer === answer;
                const optionClass = isSelected
                  ? isCorrect
                    ? "bg-green-400"
                    : "bg-red-400"
                  : "bg-white";

                return (
                  <Button
                    key={index}
                    text={answer
                      .replace(/&quot;/g, '"')
                      .replace(/&#039;/g, "'")
                      .replace(/&eacute;/g, "é")
                      .replace(/&amp;/g, "&")}
                    onClick={() => handleAnswer(answer)}
                    className={`w-full text-black font-bold py-2 rounded-md shadow-xl transition duration-300 ${optionClass}`}
                  />
                );
              })}
          </div>
        </div>
      </div>
    );
  };

  const renderResults = () => {
    const totalQuestions = questions.length;
    const wrongAnswers = totalQuestions - correctAnswersCount;

    return (
      <div className="flex flex-col md:mx-auto mx-4 my-24 bg-white shadow-md rounded-lg p-8 md:max-w-md">
        <h2 className="text-2xl font-bold mb-4">Results</h2>
        <p className="mb-4">You answered {userAnswers.length} questions.</p>
        <p className="mb-4">Correct Answers: {correctAnswersCount}</p>
        <p className="mb-4">Wrong Answers: {wrongAnswers}</p>
        <p className="mb-4">Total Questions: {totalQuestions}</p>
        <button
          onClick={handleRestartQuiz}
          className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300 mt-4"
        >
          Restart Quiz
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex justify-center md:items-center font-nunito bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600">
      <div className="w-full">
        {showResults ? renderResults() : renderQuestion()}
      </div>
    </div>
  );
};

export default Quiz;
