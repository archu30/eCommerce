import React, { useContext } from 'react';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { AuthContext } from '../context/AuthContext';

const AuthButton = () => {
  const { user, login, logout } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <GoogleLogin
          onSuccess={(credentialResponse) => login(credentialResponse)}
          onError={() => console.log('Login Failed')}
        />
      )}
    </div>
  );
};

export default AuthButton;