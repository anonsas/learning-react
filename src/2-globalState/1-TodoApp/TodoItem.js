import React, { useState, useContext } from 'react';
import TodoContext from './context/todo-context';
import { CheckIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/solid';

function TodoItem({ id, text, complete }) {
  const { completeTodo, editTodo, deleteTodo } = useContext(TodoContext);

  return (
    <div className="todo-item">
      <p style={{ color: complete && 'green' }} className="title">
        {text}
      </p>
      <div className="btn-container">
        <button className="complete-btn" onClick={() => completeTodo(id)}>
          <CheckIcon height={20} width={20} />
        </button>
        <button
          // className={`edit-btn ${edit ? 'complete' : 'not-complete'}`}
          onClick={() => editTodo(id, text, complete)}
        >
          <PencilIcon height={20} width={20} />
        </button>
        <button className="delete-btn" onClick={() => deleteTodo(id)}>
          <TrashIcon height={20} width={20} />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
