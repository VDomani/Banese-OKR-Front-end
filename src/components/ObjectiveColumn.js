// src/components/ObjectiveColumn.js

import React, { useState } from 'react';
import './ObjectiveColumn.css';
import AddObjectiveCard from './AddObjectiveCard';
import ObjectiveCard from './ObjectiveCard';

function ObjectiveColumn({ tipo, searchQuery, isExpanded }) {
  const [objetivos, setObjetivos] = useState([]);

  const adicionarObjetivo = (novoObjetivo) => {
    setObjetivos([novoObjetivo, ...objetivos]);
  };

  const editarObjetivo = (id, objetivoEditado) => {
    setObjetivos(
      objetivos.map((obj) => (obj.id === id ? objetivoEditado : obj))
    );
  };

  const deletarObjetivo = (id) => {
    setObjetivos(objetivos.filter((obj) => obj.id !== id));
  };

  // Filtrar objetivos com base na busca
  const objetivosFiltrados = objetivos.filter((obj) =>
    obj.titulo.toLowerCase().includes(searchQuery.toLowerCase()) ||
    obj.descricao.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Determinar quais objetivos serão mostrados na fileira fixa e quais serão mostrados abaixo
  const objetivosFixos = objetivosFiltrados.slice(0, 4);
  const objetivosExtras = objetivosFiltrados.slice(4);

  return (
    <div className="objective-column-wrapper">
      <div className="objective-grid-wrapper">
        <div className="objective-grid">
          <AddObjectiveCard onAdd={adicionarObjetivo} tipo={tipo} />
          {objetivosFixos.map((objetivo) => (
            <ObjectiveCard
              key={objetivo.id}
              id={objetivo.id}
              tipo={tipo}
              titulo={objetivo.titulo}
              descricao={objetivo.descricao}
              onEdit={editarObjetivo}
              onDelete={deletarObjetivo}
            />
          ))}
        </div>
      </div>

      {isExpanded && objetivosExtras.length > 0 && (
        <div className="objective-grid-wrapper first-expanded">
          <div className="objective-grid">
            {objetivosExtras.map((objetivo) => (
              <ObjectiveCard
                key={objetivo.id}
                id={objetivo.id}
                tipo={tipo}
                titulo={objetivo.titulo}
                descricao={objetivo.descricao}
                onEdit={editarObjetivo}
                onDelete={deletarObjetivo}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ObjectiveColumn;
