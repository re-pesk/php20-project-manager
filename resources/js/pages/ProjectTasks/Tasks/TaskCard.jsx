import Moment from 'moment';
import React from 'react';
import { Accordion, Badge, Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const TaskCard = ({
    name,
    id,
    priority,
    state,
    description,
    deleteTask,
    setIdDelete,
    created,
    updated,
    setDeleting,
    deleting,
}) => {
    const history = useHistory();
    Moment.locale('en');
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
    return (
        <Card key={id} id={id}>
            <Accordion.Toggle
                as={Card.Header}
                variant="link"
                eventKey={id}
            >
                <Card.Header as="h4">
                    <Badge variant="secondary">{id}</Badge>
                    {' '}
                    {capitalize(name)}
                </Card.Header>
            </Accordion.Toggle>

            <Accordion.Collapse eventKey={id}>
                <Card.Body className="bg-white">
                    <Card.Title>
                        Title:
                        {' '}
                        {capitalize(name)}
                    </Card.Title>

                    <Card.Title className="text-capitalize">
                        Priority:
                        {' '}
                        {priority}
                    </Card.Title>
                    <Card.Title className="text-capitalize">
                        State:
                        {' '}
                        {state}
                    </Card.Title>

                    <Card.Text>{description}</Card.Text>
                    <div className="d-flex justify-content-between">
                        <div>
                            <Button
                                className="mr-2"
                                variant="primary"
                                type="submit"
                                value={id}
                                onClick={() => {
                                    history.push(`/edit-task/${id}`);
                                }}
                            >
                                Edit
                            </Button>
                            <Button
                                variant="danger"
                                type="submit"
                                value={id}
                                onClick={() => {
                                    if (confirm(`Are you sure want to delete ${capitalize(name)} task?`)) {
                                        setDeleting(true);
                                        deleteTask(id);
                                        setIdDelete(id);
                                    } else {
                                        setIdDelete(id);
                                        return false;
                                    }
                                }}
                            >
                                {deleting ? 'Loading...' : 'Delete'}
                            </Button>
                        </div>
                        <div>
                            <Card.Text>
                                Created date:
                                {' '}
                                {Moment(created).format('YYYY-MM-DD HH:mm:ss')}
                            </Card.Text>
                            <Card.Text>
                                Updated date:
                                {' '}
                                {Moment(updated).format('YYYY-MM-DD HH:mm:ss')}
                            </Card.Text>
                        </div>
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
};
export default TaskCard;
