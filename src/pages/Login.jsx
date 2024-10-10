import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/features/authSlice"; 
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import Label from "../components/Label";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.auth); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email, password })).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        navigate("/quiz-app"); 
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-500">
      <div>
        <h2 className="text-5xl mb-10 text-center font-monserrat font-extrabold text-white text-shadow animate-bounce ">
          ANIME <br /> QUIZ
        </h2>
      </div>
      <div className="max-w-md w-full px-10 md:px-0">
        <form onSubmit={handleLogin} className="space-y-4 font-nunito">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <Button
            type="submit"
            text="LOGIN"
            className="w-full bg-white text-blue-900 font-extrabold py-2 mt-7 rounded-lg hover:bg-blue-900 hover:text-white transition duration-300"
            disabled={isLoading}
          />
          {error && <p className="text-white text-center">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
