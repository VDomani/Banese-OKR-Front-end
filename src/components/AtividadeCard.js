
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './AtividadeCard.css';
import { FaEdit } from 'react-icons/fa';

function AtividadeCard({
  id,
  titulo,
  descricao,
  responsavel,
  data,
  onEdit,
  onDelete,
}) {
  const [showModal, setShowModal] = useState(false);
  const [novoTitulo, setNovoTitulo] = useState(titulo);
  const [novaDescricao, setNovaDescricao] = useState(descricao);
  const [novoResponsavel, setNovoResponsavel] = useState(responsavel);
  const [novaData, setNovaData] = useState(data);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleEditAtividade = () => {
    const atividadeEditada = {
      id,
      titulo: novoTitulo,
      descricao: novaDescricao,
      responsavel: novoResponsavel,
      data: novaData,
    };
    onEdit(id, atividadeEditada);
    setShowModal(false);
  };

  const confirmDeleteAtividade = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmDelete = () => {
    onDelete(id);
    setShowModal(false);
    setShowConfirmModal(false);
  };

  return (
    <>
      <div className="atividade-card">
        <div className="atividade-header">
          <div className="atividade-title">
            Atividade - {titulo}
          </div>
          <div className="atividade-info">
            <div className="edit-icon" onClick={() => setShowModal(true)}>
              <FaEdit />
            </div>
            <div className="atividade-responsavel">
              <span className="info-label">Responsável:</span>
              <span className="info-value">{responsavel}</span>
            </div>
            <div className="atividade-data">
              <span className="info-label">Data:</span>
              <span className="info-value">{data}</span>
            </div>
          </div>
        </div>
        <div className="atividade-descricao">
          <div className="atividade-descricao-label">
            Descrição da atividade:
          </div>
          <div className="atividade-descricao-texto">
            {descricao}
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Atividade</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTitulo">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                value={novoTitulo}
                onChange={(e) => setNovoTitulo(e.target.value)}
              />
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
            <Form.Group controlId="formResponsavel">
              <Form.Label>Responsável</Form.Label>
              <Form.Control
                type="text"
                value={novoResponsavel}
                onChange={(e) => setNovoResponsavel(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formData">
              <Form.Label>Data</Form.Label>
              <Form.Control
                type="date"
                value={novaData}
                onChange={(e) => setNovaData(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={confirmDeleteAtividade}>
            Deletar
          </Button>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleEditAtividade}>
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
          <Modal.Title>Confirmar Exclusão</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tem certeza de que deseja excluir esta atividade?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirmModal(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AtividadeCard;
