import React, { useState, useEffect } from 'react';

// Clean up functions?
// Very useful from any memory leaking and makes app much faster.

function UseEffectCleanup() {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(false);

  const increase = () => setNumber((prevState) => prevState + 1);

  useEffect(() => {
    console.log('3. useEffect Runs.');
    const interval = setInterval(increase, 1000);

    return () => {
      console.log('1. Wait! Before running the useEffect, I clean here.');
      clearInterval(interval);
      console.log('2. Done! useEffect can Run.');
    };
  }, []);

  //==================================================
  useEffect(() => {
    console.log('3. useEffect Runs.');

    return () => {
      console.log('1. Wait! Before running the useEffect, I clean here.');
      // clear something from previous effect
      console.log('2. Done! useEffect can Run.');
    };
  }, [toggle]);

  return (
    <>
      <div>
        <button onClick={() => setToggle(!toggle)}>Toggle</button>
      </div>

      <div>
        <p>Cleaning {number} previous useEffect</p>
      </div>
    </>
  );
}

export default UseEffectCleanup;
