import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './KRCard.css';
import { FaEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function KRCard({ id, titulo, descricao, objetivoTitulo, onEdit, onDelete }) {
  const [showModal, setShowModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [novoTitulo, setNovoTitulo] = useState(titulo);
  const [novaDescricao, setNovaDescricao] = useState(descricao);

  const navigate = useNavigate();

  const handleEditKR = () => {
    const krEditado = {
      id,
      titulo: novoTitulo,
      descricao: novaDescricao,
    };
    onEdit(id, krEditado);
    setShowModal(false);
  };

  const confirmDeleteKR = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmDelete = () => {
    onDelete(id);
    setShowModal(false);
    setShowConfirmModal(false);
  };

  const handleCardClick = () => {
    navigate(`/krs/${id}`, { state: { id, titulo: novoTitulo } });
  };

  return (
    <>
      <div className="kr-card" onClick={handleCardClick}>
        <div
          className="edit-icon"
          onClick={(e) => {
            e.stopPropagation();
            setShowModal(true);
          }}
        >
          <FaEdit />
        </div>
        <div className="kr-card-objetivo-title">{objetivoTitulo}</div>
        <div className="kr-card-title">{novoTitulo}</div>
        <div className="kr-card-description">{novaDescricao}</div>
      </div>

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