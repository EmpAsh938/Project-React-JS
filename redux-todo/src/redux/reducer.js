import {
  HANDLE_SUBMIT,
  HANDLE_DELETE,
  HANDLE_EDIT,
  HANDLE_CLEAR,
  HANDLE_ALERT_TIMER,
  GET_LOCAL_STORAGE,
} from "./actionTypes";

const initialState = {
  todos: [],
  alert: { prompt: false, msg: "", msgColor: "" },
  editId: 0,
  isEditing: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOCAL_STORAGE:
      return {
        ...state,
        todos: action.payload,
      };
    case HANDLE_SUBMIT:
      if (state.isEditing) {
        const editedTodos = state.todos.map((item) => {
          if (item.id === state.editId) {
            return { ...item, item: action.payload };
          }
          return item;
        });
        return {
          ...state,
          todos: editedTodos,
          isEditing: false,
          alert: {
            ...state.alert,
            prompt: true,
            msg: "Item edited",
            msgColor: "green",
          },
        };
      }
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: new Date().getTime().toString(), item: action.payload },
        ],
        alert: {
          ...state.alert,
          prompt: true,
          msg: "Item Added",
          msgColor: "green",
        },
      };
    case HANDLE_DELETE:
      const newTodos = state.todos.filter((item) => item.id !== action.payload);
      return {
        ...state,
        todos: newTodos,
        alert: {
          ...state.alert,
          prompt: true,
          msg: "Item removed",
          msgColor: "red",
        },
      };
    case HANDLE_EDIT:
      return {
        ...state,
        isEditing: true,
        editId: action.payload,
      };
    case HANDLE_CLEAR:
      return {
        ...state,
        todos: [],
        alert: {
          ...state.alert,
          prompt: true,
          msg: "All items removed!",
          msgColor: "red",
        },
      };
    case HANDLE_ALERT_TIMER:
      return {
        ...state,
        alert: { ...state.alert, prompt: false, msg: "", msgColor: "" },
      };
    default:
      return state;
  }
};

export default reducer;
