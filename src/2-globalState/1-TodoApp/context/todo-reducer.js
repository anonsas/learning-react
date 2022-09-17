import { ADD_TODO, COMPLETE_TODO, EDIT_TODO, DELETE_TODO } from './todo-actions';

const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };

    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, complete: !todo.complete } : todo
        ),
      };

    case EDIT_TODO:
      const findItem = state.todos.find(action.payload.id);
      const editedItem = { ...findItem, text: action.payload.text };
      const editedTodos = [...state.todos, editedItem];
      return (state.todos = editedTodos);

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
};

export default todoReducer;
