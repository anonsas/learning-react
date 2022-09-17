import React, { useRef, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoContext from './context/todo-context';

function TodoForm() {
  const inputRef = useRef(null);
  const { addTodo } = useContext(TodoContext);

  const submitFormHandler = (e) => {
    e.preventDefault();

    const input = inputRef.current.value;
    if (!input) return;
    addTodo({ id: uuidv4(), text: input, complete: false });
    inputRef.current.value = '';
  };

  return (
    <form className="todo-form" onSubmit={submitFormHandler}>
      <h3>Plans for Today?</h3>

      <div className="form-control">
        <input
          type="text"
          className="todo-input"
          ref={inputRef}
          placeholder="Add a todo"
        />
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
