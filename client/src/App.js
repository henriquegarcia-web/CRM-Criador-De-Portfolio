import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Panel from './pages/Panel';
import Login from './pages/Login';
import Page from './pages/Page';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path='/painel' element={<Panel/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/page' element={<Page/>} />
      </Routes>
    </Router>
  );
}

export default App;
