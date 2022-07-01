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
    } catch (error) {
      console.log(error);
    }
  };

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
export default AppProvider;
