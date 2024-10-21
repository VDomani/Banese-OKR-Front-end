import React from 'react';
import { Container } from 'react-bootstrap';
import './ObjetivosPage.css';
import logo from '../assets/images/logo.png';
import ObjectiveColumn from './ObjectiveColumn';

function ObjetivosPage() {
  return (
    <div className="objetivos-container">
      <div className="top-bar">
        <img src={logo} alt="Logo Banese" className="logo" />
      </div>
      <Container className="objetivos-content">
        <div className="objective-section">
          <div className="section-header">
            <hr className="section-line" />
            <h3 className="section-title">Objetivo Anual</h3>
          </div>
          <ObjectiveColumn tipo="Anual" />
        </div>

        <div className="objective-section">
          <div className="section-header">
            <hr className="section-line" />
            <h3 className="section-title">Objetivo Trimestral</h3>
          </div>
          <ObjectiveColumn tipo="Trimestral" />
        </div>
      </Container>
    </div>
  );
}

export default ObjetivosPage;