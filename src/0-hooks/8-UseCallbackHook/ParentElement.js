import React, { useState, useCallback } from 'react';
import Title from './components/Title';
import Count from './components/Count';
import Button from './components/Button';

function ParentElement() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => setAge((prevState) => prevState + 1), []);

  const incrementSalary = useCallback(
    () => setSalary((prevState) => prevState + 1000),
    []
  );

  return (
    <>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </>
  );
}

export default ParentElement;
