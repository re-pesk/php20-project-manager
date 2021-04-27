import { Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import UpdateProjectForm from './UpdateProjectForm';

const UpdateProject = () => {
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
            <UpdateProjectForm />
        </Container>
    );
}

export default UpdateProject
