import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await axios.get("https://reqres.in/api/users/4");
      setUserData(response.data.data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.setItem("isLoggedIn", "false");
    navigate("/quiz-app/login");
  };

  const startQuiz = () => {
    navigate("/quiz-app/quiz"); // Redirect to quiz page
  };

  return (
    <div className="flex font-nunito min-h-screen bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 flex-col items-center justify-center">
      <div className="flex fixed top-0 left-0 right-0  m-5 justify-between ">
        <div onClick={handleLogout} className="flex text-black bg-white items-center px-6 rounded-full gap-x-3 font-bold hover:bg-indigo-500 hover:text-white">
          <i className="bx bx-log-out text-3xl"></i>
          <h4>Logout</h4>
        </div>
        <div className="flex flex-row gap-x-3 font-bold items-center bg-white rounded-full px-7 py-1">
          {userData ? (
            <>
              <img
                src={userData.avatar}
                alt={`${userData.first_name}'s avatar`}
                className="w-10 rounded-full"
              />
              <h4>
                {userData.first_name} {userData.last_name}
              </h4>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <div className="">
        <h1 className="text-4xl text-white mb-12 font-extrabold text-shadow">
          Welcome to the Anime Quiz!
        </h1>

        <div className="flex justify-center">
          <Button
            onClick={startQuiz}
            text={"Start Quiz"}
            className="bg-green-500 text-white font-bold px-6 py-3 rounded-md shadow-lg hover:bg-green-700 animate-bounce"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
