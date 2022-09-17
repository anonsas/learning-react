import React, { useContext } from 'react';
import { AppContext } from './ContextAPI';

function Login() {
  const { setUsername } = useContext(AppContext);

  return (
    <>
      <p>Login page</p>
      <input type="text" onChange={(e) => setUsername(e.target.value)} />
    </>
  );
}

export default Login;
