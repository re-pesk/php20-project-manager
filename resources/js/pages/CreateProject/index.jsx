import React, { useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Log from '../../components/Log';
import CreateProjectForm from './CreateProjectForm';

export default function CreateProject() {
    const history = useHistory();

    useEffect(() => {
        Log('add', 'Entered project create page');
    });

    return (
        <Container>
            <Button
                className="ml-5"
                variant="primary"
                type="submit"
                onClick={() => {
                    Log('send');
                    history.goBack();
                }}
            >
                Back
            </Button>
            <CreateProjectForm />
        </Container>
    );
}
