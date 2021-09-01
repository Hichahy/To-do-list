import typeToReducer from "type-to-reducer";
import {
  SAVE_TODO,
  DELETE_TODO,
  IS_DONE,
  TOGGLE_EDIT,
  CHANGE_TODO,
} from "../common/types";

interface stateTodo {
  todoList: Array<{
    id: number;
    task: string;
    checked: boolean;
    isEdit: boolean;
  }>;
}

const initialState: stateTodo = {
  todoList: [],
};

export const user = typeToReducer(
  {
    [SAVE_TODO]: (state: stateTodo, action: any) => ({
      ...state,
      todoList: [
        ...state.todoList,

        {
          id: state.todoList.length,
          task: action.payload.task,
          checked: false,
          isEdit: false,
        },
      ],
    }),
    [DELETE_TODO]: (state: stateTodo, action: any) => ({
      ...state,
      todoList: state.todoList.filter((item) => action.payload.id !== item.id),
    }),
    [IS_DONE]: (state: stateTodo, action: any) => ({
      ...state,
      todoList: state.todoList.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              checked: action.payload.checked,
            }
          : item
      ),
    }),
    [TOGGLE_EDIT]: (state: stateTodo, action: any) => ({
      ...state,
      todoList: state.todoList.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              isEdit: action.payload.isEdit,
            }
          : item
      ),
    }),
    [CHANGE_TODO]: (state: stateTodo, action: any) => ({
      ...state,
      todoList: state.todoList.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              task: action.payload.task,
            }
          : item
      ),
    }),
  },

  initialState
);

export default user;
