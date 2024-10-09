import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Home from "./pages/Home";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/quiz"
          element={
            <PrivateRoute>
              <Quiz />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
