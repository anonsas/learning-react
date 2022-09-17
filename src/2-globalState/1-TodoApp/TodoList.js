import React, { useEffect, useContext } from 'react';
import TodoItem from './TodoItem';
import TodoContext from './context/todo-context';

function TodoList() {
  const { todos } = useContext(TodoContext);

  // Save to localStorage
  // const saveLocalTodos = () => {
  //   localStorage.setItem('todos', JSON.stringify(todos));
  // };

  // const getLocalTodos = () => {
  //   if (!localStorage.getItem('todos').length) {
  //     localStorage.setItem('todos', JSON.stringify([]));
  //   } else {
  //     localStorage.setItem('todos', JSON.stringify(todos));
  //   }
  // };

  // Runs when app starts
  // useEffect(() => {
  //   getLocalTodos();
  // }, []);

  return (
    <div className="todo-list-container">
      <div className="todo-list">
        {todos?.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            complete={todo.complete}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
