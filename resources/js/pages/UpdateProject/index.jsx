import { useEffect } from 'react';
import React, { Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Log from '../../components/Log';
import UpdateProjectForm from './UpdateProjectForm';
import { useUserContext } from '../../context/UserContext';

const UpdateProject = () => {
    const history = useHistory();
    const { userContext } = useUserContext({});
    useEffect(() => {
        Log('add', `User ${userContext.user.email} navigated to project edit page`);
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
            <UpdateProjectForm />
        </Container>
    );
};

export default UpdateProject;
