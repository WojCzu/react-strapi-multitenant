import React from 'react';
import Login from 'views/Login/Login';
import Register from 'views/Register/Register';
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  NavLink,
} from 'react-router-dom';

const UnauthenticatedApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <nav>
        <ul>
          <li>
            <NavLink to={'/'}>login</NavLink>
          </li>
          <li>
            <NavLink to={'/register'}>register</NavLink>
          </li>
        </ul>
      </nav>
    </BrowserRouter>
  );
};

export default UnauthenticatedApp;
