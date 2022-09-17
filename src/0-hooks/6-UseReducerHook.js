import React, { useReducer } from 'react';

// Local state management.

const initialState = {
  count: 0,
  showText: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'TOGGLETEXT':
      return { ...state, showText: !state.showText };

    default:
      return state;
  }
};

function UseReducerHook() {
  // dispatch - changes the values of our state.
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <p>{state.count}</p>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increase</button>
      </div>

      <div>
        {state.showText && <p>This is text</p>}
        <button onClick={() => dispatch({ type: 'TOGGLETEXT' })}>Toggle Text</button>
      </div>
    </>
  );
}

export default UseReducerHook;
