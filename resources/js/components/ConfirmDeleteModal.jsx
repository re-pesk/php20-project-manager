import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useUserContext } from '../context/UserContext';

export default function ConfirmDeleteModal({ itemNameToDelete }) {
    const { show, handleClose, confirmDeletion, cancelDeletion, canceledDeletion } = useUserContext();

    // if modal dialog confirms deletion
    const confirmToDelete = () => {
        handleClose();
        confirmDeletion(true);
    };

    // if modal dialog canceled deletion
    const cancelToDelete = () => {
        handleClose();
        cancelDeletion(!canceledDeletion);
    };

    return (
        <Modal show={show} onHide={cancelToDelete} centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    You are about to delete
                    {' '}
                    {itemNameToDelete}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure?</Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={cancelToDelete}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={confirmToDelete}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
