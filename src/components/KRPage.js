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

  const krsAfterFirstRow = krs.slice(4);
  const krChunks = [];
  for (let i = 0; i < krsAfterFirstRow.length; i += 4) {
    krChunks.push(krsAfterFirstRow.slice(i, i + 4));
  }

  return (
    <div className="kr-page">
      <div className="top-bar">
        <img src={logo} alt="Logo Banese" className="logo" />
      </div>

      <div className="kr-content">
        <div className="objective-info">
          <hr className="divider" />
          <h3 className="objective-title">{`Objetivo ${tipo} - ${titulo}`}</h3>
        </div>

        <div className="kr-cards-section">
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

          <div className="kr-other-rows">
            {krChunks.map((chunk, index) => (
              <div className="kr-row" key={index}>
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
