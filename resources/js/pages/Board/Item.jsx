/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import axios from 'axios';
import { Draggable } from 'react-beautiful-dnd';
import { Card, Button, Badge } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export default function Item({ task, index, cols, setCols }) {
    const history = useHistory();

    let priorityColor = 'text-primary';

    if (task.priority === 'low') {
        priorityColor = 'text-success';
    }

    if (task.priority === 'medium') {
        priorityColor = 'text-warning';
    }

    if (task.priority === 'high') {
        priorityColor = 'text-danger';
    }

    const deleteTask = async (deleteId) => {
        const config = {
            _method: 'DELETE',
            headers: {
                Accept: 'application/json',
            },
        };
        await axios
            .post(`/api/projectTasks/${deleteId}`, config)
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.log(error);
            });
    };

    return (
        <Draggable draggableId={task.name + task.id} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <Card style={{ color: 'black' }} className="mx-2 mb-2 background-light">
                        <Card.Body>
                            <Card.Title style={{ maxWidth: '218.2px' }}>
                                <Badge variant="secondary">{task.id}</Badge>
                                {' '}
                                {task.name}
                            </Card.Title>
                            {/* eslint-disable-next-line max-len */}
                            <Card.Subtitle className="mb-2 text-muted text-capitalize">
                                {'Priority: '}
                                <span className={priorityColor}>{task.priority}</span>
                            </Card.Subtitle>
                            <Card.Text style={{ fontSize: '12px' }}>
                                {task.description}
                            </Card.Text>
                            <Button
                                onClick={() => {
                                    history.push(`/edit-task/${task.id}`);
                                }}
                                variant="light"
                            >
                                Edit
                            </Button>
                            <Button
                                onClick={() => {
                                    const newCols = {};
                                    newCols['to do'] = {};
                                    newCols['to do'].id = 'to do';
                                    newCols['to do'].list = cols['to do'].list.filter((t) => t.id !== task.id);

                                    newCols['in progress'] = {};
                                    newCols['in progress'].id = 'in progress';
                                    // eslint-disable-next-line max-len
                                    newCols['in progress'].list = cols['in progress'].list.filter((t) => t.id !== task.id);

                                    newCols.done = {};
                                    newCols.done.id = 'done';
                                    newCols.done.list = cols.done.list.filter((t) => t.id !== task.id);
                                    setCols(
                                        newCols,
                                    );
                                    deleteTask(task.id);
                                }}
                                variant="light"
                            >
                                Delete
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            )}
        </Draggable>
    );
}
