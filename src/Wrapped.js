import React from 'react';
import {AuthProvider} from './context/AuthProvider';
import App from './App';

const Wrapped = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

export {Wrapped};
