import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

import GlobalStyle from './styles/globals';

import Routes from './routes'

import AppProvider from './hooks';

const App: React.FC = () => {

    return (
      <Router>
        <AppProvider>
          <Routes />
        </AppProvider>
  
        <GlobalStyle />
      </Router>
      )
};

export default App;
