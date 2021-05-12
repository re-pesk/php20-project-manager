import React, { useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Log from '../../components/Log';
import CreateTaskForm from './CreateTaskForm';

export default function CreateTask() {
    const history = useHistory();
    useEffect(() => {
        Log('add', 'Entered task create page');
    }, []);
    return (
        <Container>
            <Button
                className="ml-5"
                variant="primary"
                type="submit"
                onClick={() => {
                    Log('add', 'User navigated to previous page');
                    Log('send');
                    history.goBack();
                }}
            >
                Back
            </Button>
            <CreateTaskForm />
        </Container>
    );
}
