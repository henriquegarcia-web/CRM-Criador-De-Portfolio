import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Panel from './pages/Panel';
import Page from './pages/Page';

import GlobalStyle from './globalStyles';

import { LoginData } from './data/LoginData/data'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/login' element={<Login data={LoginData.inputsLogin}/>} />
        <Route path='/register' element={<Login data={LoginData.inputsRegister} />} />
        <Route path='/painel' element={<Panel/>} />
        <Route path='/page' element={<Page/>} />
      </Routes>
    </Router>
  );
}

export default App;
