import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './AddObjectiveCard.css';

function AddObjectiveCard({ onAdd, tipo }) {
  const [showModal, setShowModal] = useState(false);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleAddObjective = () => {
    const novoObjetivo = {
      id: Date.now(), // ID único baseado no timestamp
      titulo: titulo || `Objetivo ${tipo}`,
      descricao,
    };
    onAdd(novoObjetivo);
    setTitulo('');
    setDescricao('');
    setShowModal(false);
  };

  return (
    <>
      <div className="add-objective-card" onClick={() => setShowModal(true)}>
        <div className="add-icon">+</div>
        <div className="add-text">Novo Objetivo</div>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Objetivo {tipo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTitulo">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                placeholder={`Objetivo ${tipo}`}
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                maxLength={15}
              />
            </Form.Group>
            <Form.Group controlId="formDescricao">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
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
          <Button variant="primary" onClick={handleAddObjective}>
            Adicionar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddObjectiveCard;