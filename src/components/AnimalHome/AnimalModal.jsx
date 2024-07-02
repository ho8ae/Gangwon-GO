import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../../assets/css/bootstrap-icons.css';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/style.css';

const AnimalModal = ({ show, animal, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{animal.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex align-items-center">
          <img src={animal.image} alt={animal.name} className="img-fluid me-4" style={{ maxHeight: '400px', maxWidth: '400px' }} />
          <div style={{ maxHeight: '400px', overflowY: 'auto', maxWidth: '400px' }} >
            <p >{animal.description}</p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AnimalModal;
