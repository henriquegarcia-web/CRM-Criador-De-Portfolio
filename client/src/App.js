import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Panel from './pages/Painel';
import Page from './pages/Page';

import GlobalStyle from './globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/painel' element={<Panel/>} />
        <Route path='/page' element={<Page/>} />
      </Routes>
    </Router>
  );
}

export default App;
