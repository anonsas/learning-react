import React, { useState } from 'react';

function UseStateForm() {
  const [user, setUser] = useState({
    username: '',
    password: '',
    age: '',
    email: '',
    country: '',
  });

  const submitFormHandler = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    // const { name, value } = e.target; // [name]: value
    setUser((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {/* 1. White Screen Problem - USE OPTIONAL CHAINING */}
      <div className="users">
        <p>User name: {user?.username}</p> {/* same as {user && user.name}  */}
        <p>User password: {user?.password}</p>
        <p>User age: {user?.age}</p>
        <p>User email: {user?.email}</p>
        <p>User country: {user?.country}</p>
      </div>

      {/* 2. How to update a specific object property in FORM*/}
      {/* prettier-ignore */}
      <form className="form" onSubmit={submitFormHandler}>
        <input type="text" name="username" placeholder="username" onChange={handleChange} />
        <input type="password" name="password" placeholder="password" onChange={handleChange} />
        <input type="text" name="age" placeholder="age" onChange={handleChange} />
        <input type="email" name="email" placeholder="email" onChange={handleChange} />
        <input type="text" name="country" placeholder="country" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default UseStateForm;
