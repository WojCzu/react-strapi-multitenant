import React, { useContext, createContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext({});
const apiEndpoint = 'http://localhost:1337/api';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (!jwt) return;
    (async () => {
      try {
        const { data: user } = await axios.get(`${apiEndpoint}/users/me`, {
          headers: { authorization: `Bearer ${jwt}` },
        });
        setUser(user);
      } catch (e) {
        setError(e.response.data.error.message);
      }
    })();
  }, []);

  const registerUser = async ({ username, email, password }) => {
    setError(null);
    try {
      const {
        data: { user, jwt },
      } = await axios.post(`${apiEndpoint}/auth/local/register`, {
        username,
        email,
        password,
      });
      setUser(user);
      localStorage.setItem('jwt', jwt);
    } catch (e) {
      setError(e.response.data.error.message);
    }
  };

  const signIn = async ({ identifier, password }) => {
    setError(null);
    try {
      const {
        data: { user, jwt },
      } = await axios.post(`${apiEndpoint}/auth/local`, {
        identifier,
        password,
      });
      setUser(user);
      localStorage.setItem('jwt', jwt);
    } catch (e) {
      setError(e.response.data.error.message);
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('jwt');
  };

  return (
    <AuthContext.Provider
      value={{ user, signIn, signOut, registerUser, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
