// src/components/KRCard.js

import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './KRCard.css';
import { FaEdit } from 'react-icons/fa';

function KRCard({ id, titulo, descricao, tipo, onEdit, onDelete }) {
  const [showModal, setShowModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [novoTitulo, setNovoTitulo] = useState(titulo);
  const [novaDescricao, setNovaDescricao] = useState(descricao);

  // Função para editar o KR
  const handleEditKR = () => {
    const krEditado = {
      id,
      titulo: novoTitulo,
      descricao: novaDescricao,
      tipo, // Incluímos o tipo ao editar
    };
    onEdit(id, krEditado);
    setShowModal(false);
  };

  // Função para abrir o modal de confirmação de remoção
  const confirmDeleteKR = () => {
    setShowConfirmModal(true);
  };

  // Função para confirmar a remoção
  const handleConfirmDelete = () => {
    onDelete(id);
    setShowModal(false);
    setShowConfirmModal(false);
  };

  // Define o título a ser exibido
  const displayTitulo = novoTitulo || `KR ${tipo}`;

  return (
    <>
      <div className="kr-card">
        <div
          className="edit-icon"
          onClick={(e) => {
            e.stopPropagation();
            setShowModal(true);
          }}
        >
          <FaEdit />
        </div>
        <div className="kr-title">{displayTitulo}</div>
        <div className="kr-description">{novaDescricao}</div>
      </div>

      {/* Modal de Edição */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar KR</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTitulo">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                value={novoTitulo}
                onChange={(e) => setNovoTitulo(e.target.value)}
                maxLength={15}
              />
              <Form.Text className="text-muted">
                {`${novoTitulo.length}/15 caracteres`}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formDescricao">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={novaDescricao}
                onChange={(e) => setNovaDescricao(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={confirmDeleteKR}>
            Deletar
          </Button>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleEditKR}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal de Confirmação de Remoção */}
      <Modal
        show={showConfirmModal}
        onHide={() => setShowConfirmModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Remoção</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="removal-confirmation-text">
            Tem certeza de que deseja deletar este KR?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirmModal(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Deletar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default KRCard;
