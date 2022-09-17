import React, { useContext, useReducer } from 'react';
import TodoContext from './todo-context';
import todoReducer from './todo-reducer';
import { ADD_TODO, COMPLETE_TODO, EDIT_TODO, DELETE_TODO } from './todo-actions';

function TodoState(props) {
  const initialState = {
    todos: [], // {id: '123', text: 'some text', complete: 'false'}
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  // Add Todo
  const addTodo = (todo) => {
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
  };

  // Complete Todo
  const completeTodo = (todoId) => {
    dispatch({
      type: COMPLETE_TODO,
      payload: todoId,
    });
  };

  // Edit Todo
  const editTodo = (todoId) => {
    dispatch({
      type: EDIT_TODO,
      payload: todoId,
    });
  };

  // Delete Todo
  const deleteTodo = (todoId) => {
    dispatch({
      type: DELETE_TODO,
      payload: todoId,
    });
  };

  return (
    <TodoContext.Provider
      value={{ todos: state.todos, addTodo, completeTodo, editTodo, deleteTodo }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoState;
