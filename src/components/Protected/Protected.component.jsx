import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useGlobals } from '../../state/GlobalProvider';

const Protected = (props) => {
  const { user } = useGlobals();

  return user.authenticated ? <Route {...props} /> : <Redirect to="/login" />;
};

export default Protected;
