import { connect } from "react-redux";
import todoList from "./List";
import {
  saveTodo,
  deleteTodo,
  isDone,
  toggleEdit,
  changeTodo,
} from "../actions/todo";
import { IStore } from "../types/IStore";

const mapStateToProps = (state: IStore) => ({
  todoList: state.todo.todoList,
});

export default connect(mapStateToProps, {
  saveTodo,
  deleteTodo,
  isDone,
  toggleEdit,
  changeTodo,
})(todoList as any);
