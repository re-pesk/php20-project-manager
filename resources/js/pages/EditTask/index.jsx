import React, { useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Log from '../../components/Log';
import EditTaskForm from './EditTaskForm';
import { useUserContext } from '../../context/UserContext';

export default function EditTask() {
    const history = useHistory();
    const { userContext } = useUserContext({});
    useEffect(() => {
        Log('add', `User ${userContext.user.email} navigated to task edit page`);
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
            <EditTaskForm />
        </Container>
    );
}
