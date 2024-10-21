// src/components/AddKRCard.js

import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './AddKRCard.css';
import { v4 as uuidv4 } from 'uuid';

function AddKRCard({ onAdd, tipo }) {
  const [showModal, setShowModal] = useState(false);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleAddKR = () => {
    const novoKR = {
      id: uuidv4(),
      titulo,
      descricao,
      tipo, // Incluímos o tipo no objeto KR
    };
    onAdd(novoKR);
    setShowModal(false);
    setTitulo('');
    setDescricao('');
  };

  return (
    <>
      <div className="add-kr-card" onClick={() => setShowModal(true)}>
        <span className="plus-symbol">+</span>
        <span>Adicionar KR</span>
      </div>

      {/* Modal de Adição */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar KR</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTitulo">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                placeholder="Título do KR"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                maxLength={15}
              />
              <Form.Text className="text-muted">
                {`${titulo.length}/15 caracteres`}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formDescricao">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Descrição do KR"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleAddKR}>
            Adicionar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddKRCard;
