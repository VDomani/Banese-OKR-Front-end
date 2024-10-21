import React, { useState, useRef } from 'react';
import './ObjectiveColumn.css';
import AddObjectiveCard from './AddObjectiveCard';
import ObjectiveCard from './ObjectiveCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function ObjectiveColumn({ tipo }) {
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

  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -300, 
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: 300, 
      behavior: 'smooth',
    });
  };

  return (
    <div className="objective-column">
      {objetivos.length > 0 && (
        <button className="scroll-button left" onClick={scrollLeft}>
          <FaChevronLeft />
        </button>
      )}

      <div className="add-objective-container">
        <AddObjectiveCard onAdd={adicionarObjetivo} tipo={tipo} />
      </div>

      <div className="objective-cards-container" ref={containerRef}>
        {objetivos.map((objetivo) => (
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

      {objetivos.length > 0 && (
        <button className="scroll-button right" onClick={scrollRight}>
          <FaChevronRight />
        </button>
      )}
    </div>
  );
}

export default ObjectiveColumn;
