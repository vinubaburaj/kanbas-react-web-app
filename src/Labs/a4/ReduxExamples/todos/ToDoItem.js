import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

function TodoItem(todo) {
    const dispatch = useDispatch();
  return (
    <li key={todo.id} className="list-group-item">
      <button onClick={() => dispatch(deleteTodo(todo.id))} className="btn btn-danger me-2"> Delete </button>
      <button onClick={() => dispatch(setTodo(todo))} className="btn btn-primary me-2"> Edit </button>
      {todo.todo.title}
    </li>
  );
}
export default TodoItem;
