// src/components/AtividadesPage.js

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './AtividadesPage.css';
import AddAtividadeCard from './AddAtividadeCard';
import AtividadeCard from './AtividadeCard';
import TopBar from './TopBar';

function AtividadesPage() {
  const location = useLocation();
  const { id, titulo } = location.state;

  const [atividades, setAtividades] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const adicionarAtividade = (novaAtividade) => {
    setAtividades([novaAtividade, ...atividades]);
  };

  const editarAtividade = (id, atividadeEditada) => {
    setAtividades(
      atividades.map((atv) => (atv.id === id ? atividadeEditada : atv))
    );
  };

  const deletarAtividade = (id) => {
    setAtividades(atividades.filter((atv) => atv.id !== id));
  };

  // Filtrar atividades com base na busca
  const atividadesFiltradas = atividades.filter((atv) =>
    atv.titulo.toLowerCase().includes(searchQuery.toLowerCase()) ||
    atv.descricao.toLowerCase().includes(searchQuery.toLowerCase()) ||
    atv.responsavel.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="atividades-page">
      <TopBar onSearch={handleSearch} />

      <div className="atividades-content">
        <div className="atividades-info">
          <hr className="divider" />
          <h3 className="atividades-title">Atividades do KR - {titulo}</h3>
        </div>

        <AddAtividadeCard onAdd={adicionarAtividade} />

        <div className="atividades-list">
          {atividadesFiltradas.map((atividade) => (
            <AtividadeCard
              key={atividade.id}
              id={atividade.id}
              titulo={atividade.titulo}
              descricao={atividade.descricao}
              responsavel={atividade.responsavel}
              data={atividade.data}
              onEdit={editarAtividade}
              onDelete={deletarAtividade}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AtividadesPage;
