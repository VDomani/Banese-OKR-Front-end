// src/components/AddAtividadeCard.js

import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './AddAtividadeCard.css';

function AddAtividadeCard({ onAdd }) {
  const [showModal, setShowModal] = useState(false);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [responsavel, setResponsavel] = useState('');
  const [data, setData] = useState('');

  const handleAddAtividade = () => {
    const novaAtividade = {
      id: Date.now(),
      titulo,
      descricao,
      responsavel,
      data,
    };
    onAdd(novaAtividade);
    setTitulo('');
    setDescricao('');
    setResponsavel('');
    setData('');
    setShowModal(false);
  };

  return (
    <>
      <div className="add-atividade-card" onClick={() => setShowModal(true)}>
        <div className="plus-symbol">+</div>
        <div>Adicionar Atividade</div>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Atividade</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTitulo">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o título da atividade"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formDescricao">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Digite a descrição da atividade"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formResponsavel">
              <Form.Label>Responsável</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o nome do responsável"
                value={responsavel}
                onChange={(e) => setResponsavel(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formData">
              <Form.Label>Data</Form.Label>
              <Form.Control
                type="date"
                value={data}
                onChange={(e) => setData(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleAddAtividade}>
            Adicionar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddAtividadeCard;
