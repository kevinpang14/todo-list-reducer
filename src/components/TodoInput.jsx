// src/components/TodoInput.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../redux/todos/todoAction";

const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const updatingTrackID = useSelector((state) => state.todoRed.updateTrackId);
  //todos array
  const todos = useSelector((state) => state.todoRed.todos);

  //get task id then the text to fill the input value
  useEffect(() => {
    console.log(updatingTrackID);
    if (updatingTrackID) {
      const taskToUpdate = todos.find((todo) => todo.id === updatingTrackID);
      if (taskToUpdate) {
        console.log("updating task to:", taskToUpdate.text);
        setText(taskToUpdate.text);
      }
    } else {
      // reset the input value
      setText("");
    }
  }, [updatingTrackID, todos]);

  //toggle handle submit between add and update
  const handleSubmit = (e) => {
    e.preventDefault();
    //update the task by id
    if (updatingTrackID) {
      console.log("update tracking id:", updatingTrackID);
      console.log("update text to:", text);
      dispatch(updateTodo({ id: updatingTrackID, text }));
    } else {
      dispatch(addTodo({ id: Date.now(), text, completed: false }));
    }
    setText("");
  };

  return (
    <div className="mb-3">
      <form className="input-group" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button className="btn btn-primary" type="submit">
          {updatingTrackID ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
