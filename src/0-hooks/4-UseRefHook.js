import React, { useState, useRef } from 'react';

// refs - does not cause component to re-render.

function UseRef() {
  const [name, setName] = useState('');
  const inputRef = useRef(null);

  const focus = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
  };

  const clearInput = () => (inputRef.current.value = '');

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>My name is {name}</p>
      <button onClick={focus}>Focus</button>
      <button onClick={clearInput}>Clear</button>
    </div>
  );
}

export default UseRef;
