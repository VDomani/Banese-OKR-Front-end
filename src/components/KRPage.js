// src/components/KRPage.js

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './KRPage.css';
import AddKRCard from './AddKRCard';
import KRCard from './KRCard';
import logo from '../assets/images/logo.png';

function KRPage() {
  const location = useLocation();
  const { id, tipo, titulo } = location.state;

  const [krs, setKRs] = useState([]);

  const adicionarKR = (novoKR) => {
    setKRs([novoKR, ...krs]);
  };

  const editarKR = (id, krEditado) => {
    setKRs(krs.map((kr) => (kr.id === id ? krEditado : kr)));
  };

  const deletarKR = (id) => {
    setKRs(krs.filter((kr) => kr.id !== id));
  };

  // Agrupar os KRs após o primeiro grupo de 4 em chunks de 4
  const krsAfterFirstRow = krs.slice(4);
  const krChunks = [];
  for (let i = 0; i < krsAfterFirstRow.length; i += 4) {
    krChunks.push(krsAfterFirstRow.slice(i, i + 4));
  }

  return (
    <div className="kr-page">
      {/* Barra no topo da página */}
      <div className="top-bar">
        <img src={logo} alt="Logo Banese" className="logo" />
      </div>

      {/* Conteúdo da página */}
      <div className="kr-content">
        {/* Linha centralizada com o tipo e título do objetivo */}
        <div className="objective-info">
          <hr className="divider" />
          <h3 className="objective-title">{`Objetivo ${tipo} - ${titulo}`}</h3>
        </div>

        {/* Contêiner dos cards */}
        <div className="kr-cards-section">
          {/* Primeira fileira */}
          <div className="kr-first-row">
            <AddKRCard onAdd={adicionarKR} tipo={tipo} />

            {krs.slice(0, 4).map((kr) => (
              <KRCard
                key={kr.id}
                id={kr.id}
                tipo={kr.tipo}
                titulo={kr.titulo}
                descricao={kr.descricao}
                onEdit={editarKR}
                onDelete={deletarKR}
              />
            ))}
          </div>

          {/* Demais KRs organizados em linhas */}
          <div className="kr-other-rows">
            {krChunks.map((chunk, index) => (
              <div className="kr-row" key={index}>
                {/* Placeholder para ocupar o espaço abaixo do card de adicionar KR */}
                <div className="kr-placeholder"></div>

                {chunk.map((kr) => (
                  <KRCard
                    key={kr.id}
                    id={kr.id}
                    tipo={kr.tipo}
                    titulo={kr.titulo}
                    descricao={kr.descricao}
                    onEdit={editarKR}
                    onDelete={deletarKR}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default KRPage;
