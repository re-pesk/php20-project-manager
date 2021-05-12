import React, { useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Log from '../../components/Log';
import CreateProjectForm from './CreateProjectForm';
import { useUserContext } from '../../context/UserContext';

export default function CreateProject() {
    const history = useHistory();
    const { userContext } = useUserContext({});

    useEffect(() => {
        Log('add', `User ${userContext.user.email} navigated to project create page`);
    }, []);

    return (
        <Container>
            <Button
                className="ml-5"
                variant="primary"
                type="submit"
                onClick={() => {
                    Log('add', `User ${userContext.user.email} navigated to previous page`);
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
