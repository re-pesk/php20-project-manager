import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import CreateProjectForm from './CreateProjectForm';

export default function CreateProject() {
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
            <CreateProjectForm />
        </Container>
    );
}
