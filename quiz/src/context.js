<<<<<<< HEAD
import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const category = {
  sports: 21,
  history: 23,
  politics: 24,
};

// const tempUrl = "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [index, setIndex] = useState(1);
  const [subject, setSubject] = useState("sports");
  const [level, setLevel] = useState("easy");
  const [questions, setQuestions] = useState([]);
  const [showQuestion, setShowQuestion] = useState(false);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answerCorrectness, setAnswerCorrectness] = useState(0);

  const fetchReq = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setQuestions([...data.results]);
      setShowQuestion(true);
      setIsLoading(false);
=======
import { useContext, createContext, useReducer } from "react";
import reducer from "./reducer/reducer";
import {
  FETCH_REQUEST,
  SET_CATEGORY,
  SET_DIFFICULTY,
  SET_AMOUNT,
  SHOW_QUIZ,
  UPDATE_ANSWER,
  HANDLE_NEXT,
} from "./reducer/actionTypes";

const AppContext = createContext();

const url = "https://opentdb.com/api.php";

const categoryRanking = {
  mythology: 20,
  sports: 21,
  geography: 22,
  history: 23,
  celebrities: 26,
  animals: 27,
  vehicles: 28,
};

const initialState = {
  loading: true,
  quiz: [],
  index: 0,
  score: 0,
  question: {
    amount: 10,
    category: "animals",
    difficulty: "medium",
    type: "multiple",
  },
  toggleComponent: { showQuiz: false, showModal: false },
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchRequest = async (a, c, d, t) => {
    try {
      const response = await fetch(
        `${url}?amount=${a}&category=${c}&difficulty=${d}&type=${t}`
      );
      const result = await response.json();
      dispatch({ type: FETCH_REQUEST, payload: result.results });
>>>>>>> f364450 (updated projects)
    } catch (error) {
      console.log(error);
    }
  };

<<<<<<< HEAD
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "number") {
      setIndex(value);
    } else if (name === "category") {
      setSubject(value);
    } else if (name === "difficulty") {
      setLevel(value);
    }
  };

  const handleStart = (e) => {
    e.preventDefault();
    if (!index) {
      setError(true);
    } else {
      setError(false);
      fetchReq(
        `https://opentdb.com/api.php?amount=${index}&category=${category[subject]}&difficulty=${level}&type=multiple`
      );
    }
  };

  const checkAnswer = (param) => {
    // checking for correct answer
    if (param === questions[total].correct_answer) {
      setScore(score + 1);
    } else {
      setScore(score);
    }
    setCount(count + 1);

    // increasing the index
    if (total === index - 1) {
      setTotal(total);
      setShowResult(true);
      const res = parseInt((score / count) * 100);
      setAnswerCorrectness(res.toPrecision());
    } else {
      setTotal(total + 1);
    }
  };

  const handleScore = () => {
    setShowQuestion(false);
    setIsLoading(false);
    setQuestions(false);
    setShowResult(false);
  };

  return (
    <AppContext.Provider
      value={{
        isLoading,
        error,
        index,
        subject,
        level,
        handleChange,
        handleStart,
        showQuestion,
        questions,
        checkAnswer,
        score,
        total,
        showResult,
        count,
        handleScore,
        answerCorrectness,
=======
  const handleCategory = (e) => {
    dispatch({ type: SET_CATEGORY, payload: e.target.value });
  };
  const handleDifficulty = (e) => {
    dispatch({ type: SET_DIFFICULTY, payload: e.target.value });
  };
  const handleAmount = (e) => {
    dispatch({ type: SET_AMOUNT, payload: e.target.value });
  };
  const handleSubmitStarter = (e) => {
    e.preventDefault();
    const { amount, category, difficulty, type } = state.question;
    fetchRequest(amount, categoryRanking[category], difficulty, type);
    dispatch({ type: SHOW_QUIZ });
  };
  const updateAnswer = (e) => {
    const { quiz, index } = state;
    const currentAnswer = e.target.textContent.toLowerCase();
    const checkAnswer =
      currentAnswer === quiz[index].correct_answer.toLowerCase();
    dispatch({ type: UPDATE_ANSWER, payload: checkAnswer });
  };
  const handleNext = () => {
    dispatch({ type: HANDLE_NEXT });
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        categoryRanking,
        handleCategory,
        handleDifficulty,
        handleAmount,
        handleSubmitStarter,
        handleNext,
        updateAnswer,
>>>>>>> f364450 (updated projects)
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

<<<<<<< HEAD
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
=======
export const useGlobalContext = () => useContext(AppContext);
export default AppProvider;
>>>>>>> f364450 (updated projects)
