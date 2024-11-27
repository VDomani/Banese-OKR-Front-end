import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './ObjectiveCard.css';
import { FaEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function ObjectiveCard({ id, tipo, titulo, descricao, onEdit, onDelete }) {
  const [showModal, setShowModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [novoTitulo, setNovoTitulo] = useState(titulo);
  const [novaDescricao, setNovaDescricao] = useState(descricao);

  const navigate = useNavigate();

  const handleEditObjective = () => {
    const objetivoEditado = {
      id,
      titulo: novoTitulo,
      descricao: novaDescricao,
    };
    onEdit(id, objetivoEditado);
    setShowModal(false);
  };

  const confirmDeleteObjective = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmDelete = () => {
    onDelete(id);
    setShowModal(false);
    setShowConfirmModal(false);
  };

  const handleCardClick = () => {
    navigate(`/objetivos/${id}`, { state: { id, tipo, titulo } });
  };

  return (
    <>
      <div className="objective-card" onClick={handleCardClick}>
        <div
          className="edit-icon"
          onClick={(e) => {
            e.stopPropagation(); 
            setShowModal(true);
          }}
        >
          <FaEdit />
        </div>
        <div className="objective-type">{novoTitulo}</div>
        <div className="objective-description">{novaDescricao}</div>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Objetivo {tipo}</Modal.Title>
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
          <Button variant="danger" onClick={confirmDeleteObjective}>
            Deletar
          </Button>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleEditObjective}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>

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
            Tem certeza de que deseja deletar este objetivo?
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

export default ObjectiveCard;