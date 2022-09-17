import React, { useState } from 'react';

// If I don't need a prevState, always use straight - setNumber(0),
// setColor('blue'), without any callback.

function UseStateHook() {
  const [number, setNumber] = useState(0);
  const [numbers, setNumbers] = useState([]);

  const decrease = () => setNumber((prevState) => prevState - 1);
  const increase = () => setNumber((prevState) => prevState + 1);

  const increaseAsync = () => {
    setTimeout(() => {
      setNumber((prevState) => prevState + 1);
    }, 2000);
  };

  const addNumbers = (num) => setNumber((prevState) => [...prevState, num]);

  // Not destructive way, because we make a copy.
  const sort = () => setNumbers((num) => [...num].sort((a, b) => a - b));

  return (
    <>
      {/* 1. Functional Update */}
      <div className="numbers">
        <p>{number}</p>
        <button onClick={decrease}>Decrease</button>
        <button onClick={increase}>Increase</button>
        <button onClick={increaseAsync}>Increase Async</button>
      </div>
    </>
  );
}

export default UseStateHook;
