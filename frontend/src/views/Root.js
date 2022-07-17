import React from 'react';
import { useAuth } from 'hooks/useAuth';
import AuthenticatedApp from './AuthenticatedApp/AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp/UnauthenticatedApp';

const Root = () => {
  const { user } = useAuth();

  return <>{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</>;
};

export default Root;
