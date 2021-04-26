import Moment from 'moment';
import React from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';

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
    Moment.locale('en');
    return (
        <Card key={id} id={id}>
            <Accordion.Toggle
                className="text-capitalize"
                // as={Button}
                // variant="link"
                eventKey={id}
            >
                <Card.Header as="h4" className="text-dark cursor-pointer">
                    {id}
                    {' '}
                    {name}
                </Card.Header>
            </Accordion.Toggle>

            <Accordion.Collapse eventKey={id}>
                <Card.Body className="bg-white">
                    <Card.Title className="text-capitalize">
                        Title:
                        {' '}
                        {name}
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
                                variant="success"
                                href={`/edit-task/${id}`}
                                type="submit"
                                value={id}
                                // onClick={() => {
                                //     setDeleting(true);
                                //     deleteTask(id);
                                //     setIdDelete(id);
                                // }}
                            >
                                Edite
                            </Button>
                            <Button
                                variant="danger"
                                type="submit"
                                value={id}
                                onClick={() => {
                                    setDeleting(true);
                                    deleteTask(id);
                                    setIdDelete(id);
                                }}
                            >
                                {deleting ? 'Loading...' : 'Delete'}
                            </Button>
                        </div>

                        <div>
                            <Card.Text>
                                Created date:
                                {' '}
                                {Moment(created).format('YYYY-MM-DD HH:m:s')}
                            </Card.Text>
                            <Card.Text>
                                Updated date:
                                {' '}
                                {Moment(updated).format('YYYY-MM-DD HH:m:s')}
                            </Card.Text>
                        </div>
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
};
export default TaskCard;
