import { useEffect, useState, useRef } from "react";
import Button from "../components/Button";
import correctSound from "../assets/correct.wav"; 
import incorrectSound from "../assets/incorrect.wav";
import backgroundMusic from "../assets/background.mp3";
import { useDispatch } from "react-redux";
import { fetchQuestions } from "../redux/features/quizSlice";
import { useSelector } from "react-redux";

// Function to shuffle an array
const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Quiz = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.quiz.questions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [shuffledAnswers, setShuffledAnswers] = useState([]); // State for shuffled answers
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null); 
  const timerRef = useRef(null);
  const audioRef = useRef(new Audio());
  const backgroundMusicRef = useRef(new Audio(backgroundMusic));

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

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
    };
  }, []);

  useEffect(() => {
    // When the current question changes, shuffle answers once
    if (questions.length > 0) {
      const question = questions[currentQuestionIndex];
      const answers = shuffleArray(
        question.incorrect_answers.concat(question.correct_answer)
      );
      setShuffledAnswers(answers); // Store shuffled answers in state
    }
  }, [currentQuestionIndex, questions]);

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
    setTimeLeft(30);
    setCorrectAnswersCount(0);
    startTimer();
  };

  const renderQuestion = () => {
    if (questions.length === 0) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="spinner"></div>
        </div>
      );
    }

    const question = questions[currentQuestionIndex];
    const cleanQuestion = question.question
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .replace(/&eacute;/g, "é")
      .replace(/&amp;/g, "&");

    return (
      <div className="flex flex-col">
        <div className="fixed top-0 left-0 right-0 flex p-4 md:p-10 justify-between w-full md:text-3xl text-lg font-extrabold text-black">
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
        <div className="flex flex-col min-h-screen justify-center">
          <div className="flex bg-white md:mx-10 md:mt-28 mx-4 shadow-md rounded-lg outline p-4 min-h-32 items-center justify-center">
            <h2 className="text-xl font-bold">{cleanQuestion}</h2>
          </div>

          <div className="md:m-10 pt-10 mx-4">
            <div className="space-y-2">
              {shuffledAnswers.map((answer, index) => {
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
                    className={`w-full text-black outline font-bold py-2 rounded-lg shadow-xl transition duration-300 ${optionClass}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderResults = () => {
    const totalQuestions = questions.length;
    const wrongAnswers = totalQuestions - correctAnswersCount;

    return (
      <div className="flex items-center  max-w-full justify-center min-h-screen mx-10">
        <div className="flex flex-col outline w-full sm:max-w-96 bg-white shadow-md rounded-lg p-8 justify-center">
          <h2 className="text-2xl font-bold mb-4">Results</h2>
          <p className="mb-4">You answered {userAnswers.length} questions.</p>
          <p className="mb-4">Correct Answers: {correctAnswersCount}</p>
          <p className="mb-4">Wrong Answers: {wrongAnswers}</p>
          <Button
            text="Restart Quiz"
            onClick={handleRestartQuiz}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-4"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="bg-blue-500 font-nunito">
      {showResults ? renderResults() : renderQuestion()}
    </div>
  );
};

export default Quiz;
