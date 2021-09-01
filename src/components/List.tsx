import React, { useState } from "react";
import "./List.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

interface IProps {
  todoList: Array<{
    id: number;
    task: string;
    checked: boolean;
    isEdit: boolean;
  }>;
  saveTodo: (task: string) => void;
  deleteTodo: (id: number) => void;
  isDone: (id: number, checked: boolean) => void;
  toggleEdit: (id: number, isEdit: boolean) => void;
  changeTodo: (id: number, task: string) => void;
}

const List = ({
  todoList,
  saveTodo,
  deleteTodo,
  isDone,
  toggleEdit,
  changeTodo,
}: IProps) => {
  const [text, setText] = useState("");

  const addTodo = () => {
    console.log(`adding ${text}`);
    saveTodo(text);
    setText("");
  };

  return (
    <div className="list-wrapper">
      <div className="tittle-box">
        <div className="TODO_h1">
          <h1 className="rotate">To</h1>
          <h1 className="rotate_do">Do</h1>
        </div>
        <h1>List</h1>
      </div>
      <div className="list-box">
        <div className="add-section">
          <input
            placeholder="ADD YOUR TASK"
            className="add-input"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="add-button">
            {text.trim() === "" ? (
              <i className="bi bi-plus-circle"></i>
            ) : (
              <i onClick={addTodo} className="bi-plus-circle-fill"></i>
            )}
          </div>
        </div>
        <div className="task-container">
          <div className="task-box">
            {todoList.map((item) => (
              <div className="task-item" key={item.id}>
                <span className={item.checked ? "done" : "task"}>
                  {item.isEdit ? (
                    <input
                      type="text"
                      value={item.task}
                      onChange={(e) => changeTodo(item.id, e.target.value)}
                    />
                  ) : (
                    item.task
                  )}
                </span>
                <div style={{display:"flex", flexDirection:"inherit"}}>
                  <div onClick={() => toggleEdit(item.id, item.isEdit)}>
                    <i
                      className={!item.isEdit ? "bi bi-pen" : "bi bi-pen-fill"}
                    ></i>
                  </div>

                  <div onClick={() => isDone(item.id, !item.checked)}>
                    <i
                      className={
                        item.checked
                          ? "bi bi-check-circle-fill"
                          : "bi bi-check-circle"
                      }
                    ></i>
                  </div>
                  <div onClick={() => deleteTodo(item.id)}>
                    <i className="bi bi-trash2 "></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
