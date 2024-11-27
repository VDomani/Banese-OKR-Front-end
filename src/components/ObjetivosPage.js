
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './ObjetivosPage.css';
import ObjectiveColumn from './ObjectiveColumn';
import TopBar from './TopBar';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function ObjetivosPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isExpandedAnual, setIsExpandedAnual] = useState(false);
  const [isExpandedTrimestral, setIsExpandedTrimestral] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="objetivos-container">
      <TopBar onSearch={handleSearch} />
      <Container className="objetivos-content">
        <div className="objective-section">
          <div className="section-header">
            <hr className="section-line" />
            <h3 className="section-title">Objetivo Anual</h3>
            <div
              className="expand-icon"
              onClick={() => setIsExpandedAnual(!isExpandedAnual)}
            >
              {isExpandedAnual ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>
          <ObjectiveColumn
            tipo="Anual"
            searchQuery={searchQuery}
            isExpanded={isExpandedAnual}
          />
        </div>

        <div className="objective-section">
          <div className="section-header">
            <hr className="section-line" />
            <h3 className="section-title">Objetivo Trimestral</h3>
            <div
              className="expand-icon"
              onClick={() => setIsExpandedTrimestral(!isExpandedTrimestral)}
            >
              {isExpandedTrimestral ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>
          <ObjectiveColumn
            tipo="Trimestral"
            searchQuery={searchQuery}
            isExpanded={isExpandedTrimestral}
          />
        </div>
      </Container>
    </div>
  );
}

export default ObjetivosPage;
