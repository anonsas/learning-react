import React, { useState, useMemo } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const increment = () => setCounter((prevState) => prevState + 1);
  const increment2 = () => setCounter2((prevState) => prevState + 1);

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) i++;
    return counter % 2 === 0;
  }, [counter]);

  return (
    <div>
      <div>
        <button onClick={increment}>Count One - {counter}</button>
        <span>{isEven ? 'Even' : 'Odd'}</span>
      </div>
      <div>
        <button onClick={increment2}>Count Two - {counter2}</button>
      </div>
    </div>
  );
}

export default Counter;

// In Real World Apps: we will come across logic, when a function
// makes computationally expensive calculations and it takes time.

// Example: Fetching thousand of items Array.map().filter().sort()

// When we increment Count Two - the function is also slow,
// because of every time the state updates the component re-renders,
// and when component re-renders, the isEven() is called again.
// And the function is very slow. So we need a way to tell React not
// to re-calculate certain values when un-necessary.
// Especially which take a long time to compute.
