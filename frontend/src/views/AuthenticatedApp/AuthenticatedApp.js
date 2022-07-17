import React from 'react';
import { useAuth } from 'hooks/useAuth';
import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';

const AuthenticatedApp = () => {
  const { signOut } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>My app</div>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <nav>
        <ul>
          <li>
            <NavLink to={'/'}>app</NavLink>
          </li>
          <li>
            <button onClick={signOut}>signOut</button>
          </li>
        </ul>
      </nav>
    </BrowserRouter>
  );
};

export default AuthenticatedApp;
