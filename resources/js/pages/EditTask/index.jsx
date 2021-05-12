import React, { useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Log from '../../components/Log';
import EditTaskForm from './EditTaskForm';

export default function EditTask() {
    const history = useHistory();
    useEffect(() => {
        Log('add', 'Entered task edit page');
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
            <EditTaskForm />
        </Container>
    );
}
