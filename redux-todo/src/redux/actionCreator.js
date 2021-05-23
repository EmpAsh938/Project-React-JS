import {
  HANDLE_SUBMIT,
  HANDLE_DELETE,
  HANDLE_EDIT,
  HANDLE_CLEAR,
  HANDLE_ALERT_TIMER,
  GET_LOCAL_STORAGE,
} from "./actionTypes";

export const handleSubmit = (input) => {
  return {
    type: HANDLE_SUBMIT,
    payload: input,
  };
};

export const handleDelete = (id) => {
  return {
    type: HANDLE_DELETE,
    payload: id,
  };
};

export const handleEdit = (id) => {
  return {
    type: HANDLE_EDIT,
    payload: id,
  };
};
export const handleClear = () => {
  return {
    type: HANDLE_CLEAR,
  };
};

export const handleAlertTimer = () => {
  return {
    type: HANDLE_ALERT_TIMER,
  };
};
export const getLocalStorage = (param) => {
  return {
    type: GET_LOCAL_STORAGE,
    payload: param,
  };
};
