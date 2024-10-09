import { useState } from "react";
import axios from "axios";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import Label from "../components/Label";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });

      console.log("Response:", response);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("isLoggedIn", "true");
      navigate("/quiz-app");
    } catch (error) {
      setError("Invalid login credentials");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600">
      <div>
        <h2 className="text-5xl mb-10 text-center font-monserrat font-extrabold text-white text-shadow animate-bounce ">
          ANIME <br /> QUIZ
        </h2>
      </div>
      <div className="max-w-md w-full">
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
            className="w-full bg-white text-indigo-700 font-extrabold py-2 mt-7 rounded-md hover:bg-indigo-700 hover:text-white transition duration-300"
            disabled={isLoading}
          />
          {error && <p className="text-white text-center">{error}</p>}

        </form>
      </div>
    </div>
  );
};

export default Login;
