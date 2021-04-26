import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import EditTaskForm from './EditTaskForm';

export default function EditTask() {
    const history = useHistory();
    return (
        <Container>
            <Button
                className="ml-5"
                variant="primary"
                type="submit"
                onClick={() => {
                    history.goBack();
                }}
            >
                Back
            </Button>
            <EditTaskForm />
        </Container>
    );
}
