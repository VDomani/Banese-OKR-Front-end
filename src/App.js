// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ObjetivosPage from './components/ObjetivosPage';
import KRPage from './components/KRPage';
import AtividadesPage from './components/AtividadesPage'; // Importe o componente AtividadesPage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ObjetivosPage />} />
        <Route path="/objetivos/:id" element={<KRPage />} />
        <Route path="/krs/:id" element={<AtividadesPage />} /> {/* Nova rota */}
      </Routes>
    </Router>
  );
}

export default App;
