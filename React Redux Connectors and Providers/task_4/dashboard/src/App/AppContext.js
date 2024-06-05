import React from 'react';


const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false,
};

// Default logOut function
const defaultLogOut = () => {};

// Create context
const AppContext = React.createContext({
  user: defaultUser,
  logOut: defaultLogOut,
});

export default AppContext;
