import React, { useContext } from 'react';
import { AppContext } from './ContextAPI';

function User() {
  const { username } = useContext(AppContext);

  return (
    <>
      <p>User page</p>
      <p>{username}</p>
    </>
  );
}

export default User;
