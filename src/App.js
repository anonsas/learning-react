import './App.css';
// import TodoForm from './globalState/1-TodoApp/TodoForm';
// import TodoList from './globalState/1-TodoApp/TodoList';
// import TodoState from './globalState/1-TodoApp/context/TodoState';

import FormElements from './1-form/0-FormElements';

function App() {
  return (
    <div className="todo-container">
      {/* <TodoState>
        <TodoForm />
        <TodoList />
      </TodoState> */}
      <FormElements />
    </div>
  );
}

export default App;
