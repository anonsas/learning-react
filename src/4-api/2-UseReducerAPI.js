import React, { useReducer } from 'react';
import axios from 'axios';

const INITIAL_STATE = {
  loading: false,
  data: null,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { loading: true, data: null, error: null };

    case 'FETCH_SUCCESS':
      return { ...state, loading: false, data: action.payload };

    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

function UseReducerAPI() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const handleFetch = () => {
    dispatch({ type: 'FETCH_REQUEST' });

    axios
      .get('https://jsonplaceholder.typicode.com/users/1')
      .then((response) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_ERROR', payload: err.message });
      });
  };

  return (
    <div>
      <button onClick={handleFetch}>Fetch Data</button>
      <p>{state.data.name}</p>

      <p>{state.loading && 'Loading...'}</p>
      <p>{state.error && 'Something went wrong'}</p>
    </div>
  );
}

export default UseReducerAPI;
