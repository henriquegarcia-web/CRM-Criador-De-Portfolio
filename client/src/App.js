import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Access from './pages/Access';
import Panel from './pages/Panel';
import Page from './pages/Page';

import GlobalStyle from './globalStyles';

import { AccessData } from './data/AccessData/data'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/login' element={<Access data={AccessData.dataLogin}/>} />
        <Route path='/register' element={<Access data={AccessData.dataRegister} />} />
        <Route path='/painel' element={<Panel/>} />
        <Route path='/page' element={<Page/>} />
      </Routes>
    </Router>
  );
}

export default App;
