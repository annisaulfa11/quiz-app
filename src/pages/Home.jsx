import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/features/authSlice";
import { fetchUser } from "../redux/features/userSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.data);
  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/quiz-app/login");
  };

  const startQuiz = () => {
    navigate("/quiz-app/quiz");
  };

  return (
    <div className="flex font-nunito min-h-screen bg-blue-500  flex-col items-center justify-center">
      <div className="flex fixed top-0 left-0 right-0  m-5 justify-between ">
        <div onClick={handleLogout} className="flex outline text-black bg-white items-center px-6 rounded-lg gap-x-3 font-bold hover:bg-indigo-500 hover:text-white">
          <i className="bx bx-log-out text-3xl"></i>
          <h4>Logout</h4>
        </div>
        <div className="flex flex-row gap-x-3 outline font-bold items-center bg-white rounded-lg px-7 py-1">
          {status === "loading" ? (
            <p>Loading...</p>
          ) : status === "failed" ? (
            <p>Error: {error}</p>
          ) : userData ? (
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
            <p>No user data found.</p>
          )}
        </div>
      </div>
      <div className="px-5 justify-center">
        <h1 className="text-4xl text-center text-white mb-12 font-extrabold text-shadow">
          Welcome to the Anime Quiz!
        </h1>

        <div className="flex justify-center">
          <Button
            onClick={startQuiz}
            text={"Start Quiz"}
            className="bg-green-500 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 animate-bounce"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
