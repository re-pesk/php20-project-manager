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
                className="text-capitalize"
                as={Button}
                variant="light"
                eventKey={id}
            >
                <Card.Header as="h4">
                    <div className="row">
                        <div className="col-sm d-flex align-items-center">
                            <h4 className="text-left">
                                <Badge variant="secondary">{id}</Badge>
                                {' '}
                                {capitalize(name)}
                            </h4>
                        </div>

                        <div className="d-flex flex-column justify-content-start col-sm">
                            <h5 className="text-left">
                                Priority:
                                {' '}
                                <span className={
                                    priority === 'low' ? 'text-secondary'
                                        : priority === 'medium' ? 'text-warning'
                                            : priority === 'high' ? 'text-danger' : null
                                }
                                >
                                    {priority}
                                </span>

                            </h5>
                            <h5 className="text-left">
                                State:
                                {' '}
                                <span className={
                                    state === 'to do' ? 'text-secondary'
                                        : state === 'in progress' ? 'text-primary'
                                            : state === 'done' ? 'text-success' : null
                                }
                                >

                                    {state}
                                </span>

                            </h5>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-end col-sm">
                            <h6 className="text-left text-sm-right pt-1">
                                Created date:
                                {' '}
                                {Moment(created).format('YYYY-MM-DD HH:mm:ss')}
                            </h6>
                            <h6 className="text-left text-sm-right pt-1">
                                Updated date:
                                {' '}
                                {Moment(updated).format('YYYY-MM-DD HH:mm:ss')}
                            </h6>
                        </div>
                    </div>

                </Card.Header>
            </Accordion.Toggle>

            <Accordion.Collapse eventKey={id}>
                <Card.Body className="bg-white">
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
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
};
export default TaskCard;
