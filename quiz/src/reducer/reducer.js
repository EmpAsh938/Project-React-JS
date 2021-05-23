import {
  FETCH_REQUEST,
  SET_CATEGORY,
  SET_DIFFICULTY,
  SET_AMOUNT,
  SHOW_QUIZ,
  UPDATE_ANSWER,
  HANDLE_NEXT,
} from "./actionTypes";

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        quiz: [...action.payload],
        loading: false,
      };
    case SET_CATEGORY:
      return {
        ...state,
        question: { ...state.question, category: action.payload },
      };
    case SET_DIFFICULTY:
      return {
        ...state,
        question: { ...state.question, difficulty: action.payload },
      };
    case SET_AMOUNT:
      return {
        ...state,
        question: { ...state.question, amount: action.payload },
      };
    case SHOW_QUIZ:
      return {
        ...state,
        toggleComponent: { ...state.toggleComponent, showQuiz: true },
      };
    case UPDATE_ANSWER:
      let increaseScore = action.payload ? 10 : 0;

      let tempIndex = state.index + 1;
      if (Number(state.question.amount) === tempIndex) {
        tempIndex = 0;
        return {
          ...state,
          score: state.score + increaseScore,
          index: tempIndex,
          toggleComponent: { ...state.toggleComponent, showModal: true },
        };
      }
      return {
        ...state,
        score: state.score + increaseScore,
        index: tempIndex,
      };
    case HANDLE_NEXT:
      return {
        ...state,
        quiz: [],
        score: 0,
        loading: true,
        toggleComponent: {
          ...state.toggleComponent,
          showModal: false,
          showQuiz: false,
        },
      };
    default:
      return state;
  }
};

export default reducer;
