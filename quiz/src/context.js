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
    } catch (error) {
      console.log(error);
    }
  };

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
