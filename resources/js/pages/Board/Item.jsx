import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Card, Button, Badge } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Item = ({ task, index }) => (

    // const history = useHistory();

    <Draggable draggableId={task.name + task.id} index={index}>
        {(provided) => (
            <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
            >
                <Card style={{ color: 'black' }} className="mx-2 mb-2 background-light">
                    <Card.Body>
                        <Card.Title>
                            <Badge variant="secondary">{task.id}</Badge>
                            {' '}
                            {task.name}
                        </Card.Title>
                        <Card.Text style={{ fontSize: '12px' }}>
                            {task.description}
                        </Card.Text>
                        <Button
                            onClick={() => {
                                window.location = `/edit-task/${task.id}`;
                            }}
                            variant="light"
                        >
                            Edit
                        </Button>
                        {/* <Button
                            onClick={() => {
                                window.location = `/edit-task/${task.id}`;
                            }}
                            variant="light"
                        >
                            Delete
                        </Button> */}
                    </Card.Body>
                </Card>
            </div>
        )}
    </Draggable>
);

export default Item;
