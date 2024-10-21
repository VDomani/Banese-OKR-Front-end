// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import ObjetivosPage from './components/ObjetivosPage';
import KRPage from './components/KRPage'; // Importe o componente KRPage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/objetivos" element={<ObjetivosPage />} />
        <Route path="/objetivos/:id" element={<KRPage />} /> {/* Nova rota */}
      </Routes>
    </Router>
  );
}

export default App;
