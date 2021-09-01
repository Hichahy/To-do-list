import {
  SAVE_TODO,
  DELETE_TODO,
  IS_DONE,
  TOGGLE_EDIT,
  CHANGE_TODO,
} from "../common/types";

export const saveTodo = (task: string) => (dispatch: any) => {
  try {
    dispatch({
      type: SAVE_TODO,
      payload: { task },
    });
  } catch (err) {
    console.log(`err`, err);
  }
};

export const deleteTodo = (id: number) => (dispatch: any) => {
  try {
    dispatch({
      type: DELETE_TODO,
      payload: { id },
    });
  } catch (err) {
    console.log(`err`, err);
  }
};

export const isDone = (id: number, checked: boolean) => (dispatch: any) => {
  try {
    dispatch({
      type: IS_DONE,
      payload: { id, checked },
    });
  } catch (err) {
    console.log(`err`, err);
  }
};

export const toggleEdit = (id: number, isEdit: boolean) => (dispatch: any) => {
  try {
    dispatch({
      type: TOGGLE_EDIT,
      payload: { id, isEdit: !isEdit },
    });
  } catch (err) {
    console.log(`err`, err);
  }
};

export const changeTodo = (id: number, task: string) => (dispatch: any) => {
  try {
    dispatch({
      type: CHANGE_TODO,
      payload: { id, task },
    });
  } catch (err) {
    console.log(`err`, err);
  }
};
