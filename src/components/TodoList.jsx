import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteTodo,
  toggleTodo,
  toggleUpdate,
} from "../redux/todos/todoAction";

const TodoList = () => {
  const todos = useSelector((state) => state.todoRed.todos);
  const dispatch = useDispatch();

  const handleToggleUpdate = () => {
    //dispatch
  };

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`list-group-item d-flex justify-content-between align-items-center ${
            todo.completed ? "list-group-item-success" : ""
          }`}
        >
          <span
            style={{
              cursor: "pointer",
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
          </span>
          <span>
            <button
              className="btn btn-danger btn-sm mx-1"
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              Delete
            </button>
            <button
              className="btn btn-info btn-sm mx-1"
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              Done
            </button>
            <button
              className="btn btn-warning btn-sm mx-1"
              //set the update track id to todo.id
              onClick={() => dispatch(toggleUpdate(todo.id))}
            >
              Update
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
