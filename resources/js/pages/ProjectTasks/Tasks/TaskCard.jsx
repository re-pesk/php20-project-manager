/* eslint-disable no-nested-ternary */
import Moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Accordion, Badge, Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useUserContext } from '../../../context/UserContext';

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
    tasksData,
    currentPage,
}) => {
    const history = useHistory();
    Moment.locale('en');
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    const { handleShow, confirmedDeletion, confirmDeletion, canceledDeletion } = useUserContext();

    // used to set this particular task for deletion, this is local variable
    const [wantToDelete, setToDelete] = useState(false);
    const [idToDelete, setIdToDelete] = useState(0);

    const eventFire = (el, etype) => {
        if (el.fireEvent) {
            el.fireEvent(`on${etype}`);
        } else {
            const evObj = document.createEvent('Events');
            evObj.initEvent(etype, true, false);
            el.dispatchEvent(evObj);
        }
    };

    // used when task confirmed for deletion
    useEffect(() => {
        if (wantToDelete && confirmedDeletion) {
            setDeleting(true);
            setToDelete(false);
            confirmDeletion(false);
            deleteTask(idToDelete);
            setIdDelete(idToDelete);
            if (tasksData.length === 1) {
                eventFire(document.querySelector(`a[aria-label='Page ${currentPage - 1}']`), 'click');
            }
        }
    }, [confirmedDeletion]);

    // used when task refused for deletion
    useEffect(() => {
        setToDelete(false);
    }, [canceledDeletion]);

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
                                    // history.push(`/edit-task/${id}`);
                                    history.push({ pathname: '/project/edit-task',
                                        state: {
                                            task: id,
                                            project: null,
                                        } });
                                }}
                            >
                                Edit
                            </Button>
                            <Button
                                variant="danger"
                                type="submit"
                                value={id}
                                onClick={() => {
                                    // show modal
                                    handleShow(true);
                                    // set this particular task as wanted for deletion
                                    setToDelete(true);
                                    setIdToDelete(id);
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
