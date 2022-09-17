import React, { useState, useEffect, useMemo } from 'react';

// Primitive and Non-primitive dependencies?
// strings, numbers, booleans, null, undefined are Primitive
// objects, arrays, functions are Non-Primitive

// This is why when our object state hasn't changed, but
// useEffect still re-renders, because {} !== {}.

function UseEffect() {
  const [user, setUser] = useState({
    name: '',
    age: '',
    city: '',
  });

  // 1. Solution - 1.
  useEffect(() => {
    console.count('useEffect runs');
  }, [user.name, user.age, user.city]);

  //=====================================
  // 2. Solution - 2.
  const memoizedUser = useMemo(
    () => ({
      name: user.name,
      age: user.age,
      city: user.city,
    }),
    [user.name, user.age, user.city]
  );

  useEffect(() => {
    console.count('useEffect runs');
  }, [memoizedUser]);
  //=====================================

  const changeName = () => setUser((prevState) => ({ ...prevState, name: 'Bob' }));
  const changeAge = () => setUser((prevState) => ({ ...prevState, age: '44' }));
  const changeCity = () => setUser((prevState) => ({ ...prevState, city: 'Amsterdam' }));

  return (
    <>
      <div>
        <button onClick={changeName}>Change name</button>
        <button onClick={changeAge}>Change age</button>
        <button onClick={changeCity}>Change city</button>
        <p>
          {user.name} {user.age} {user.city}
        </p>
      </div>
    </>
  );
}

export default UseEffect;
