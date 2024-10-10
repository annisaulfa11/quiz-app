import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import useReducer from "./features/userSlice";
import quizReducer from "./features/quizSlice";

const store = configureStore({
    reducer: {
      auth: authReducer,
      user: useReducer,
      quiz: quizReducer

    },
  });

export default store;
