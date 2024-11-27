// src/components/KRPage.js

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './KRPage.css';
import AddKRCard from './AddKRCard';
import KRCard from './KRCard';
import TopBar from './TopBar';

function KRPage() {
  const location = useLocation();
  const { id, tipo, titulo } = location.state; // 'titulo' é o título do objetivo

  const [krs, setKRs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const adicionarKR = (novoKR) => {
    setKRs([novoKR, ...krs]);
  };

  const editarKR = (id, krEditado) => {
    setKRs(krs.map((kr) => (kr.id === id ? krEditado : kr)));
  };

  const deletarKR = (id) => {
    setKRs(krs.filter((kr) => kr.id !== id));
  };

  // Filtrar KRs com base na busca
  const krsFiltrados = krs.filter((kr) =>
    kr.titulo.toLowerCase().includes(searchQuery.toLowerCase()) ||
    kr.descricao.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="kr-page">
      <TopBar onSearch={handleSearch} />

      <div className="kr-content">
        <div className="kr-info">
          <hr className="divider" />
          <h3 className="kr-title">KRs do Objetivo - {titulo}</h3>
        </div>

        <div className="kr-grid-wrapper">
          <div className="kr-grid">
            <AddKRCard onAdd={adicionarKR} />
            {krsFiltrados.map((kr) => (
              <KRCard
                key={kr.id}
                id={kr.id}
                titulo={kr.titulo}
                descricao={kr.descricao}
                objetivoTitulo={titulo}
                onEdit={editarKR}
                onDelete={deletarKR}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default KRPage;
