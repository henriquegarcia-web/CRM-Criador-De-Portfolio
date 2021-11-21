import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';      // Página da HOME
import Access from './pages/Access';  // Página de ACESSO (lOGIN e CADASTRO)
import Panel from './pages/Panel';    // Página do PAINEL
import Page from './pages/Page';      // PÁGINA

import GlobalStyle from './globalStyles';

import { AccessData } from './data/AccessData/data' // Import DATA de ACESSO

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
