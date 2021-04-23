import React, { useState } from "react";
import { Button, Card, Accordion } from "react-bootstrap";
import axios from "axios";
import Moment from "moment";

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
    Moment.locale("en");
    return (
        <Card key={id} id={id}>
            <Card.Header as="h4">
                <Accordion.Toggle
                    className="text-capitalize"
                    as={Button}
                    variant="link"
                    eventKey={id}
                >
                    {id} {name}
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={id}>
                <Card.Body className="bg-white">
                    <Card.Title className="text-capitalize">
                        Title: {name}
                    </Card.Title>

                    <Card.Title className="text-capitalize">
                        Priority: {priority}
                    </Card.Title>
                    <Card.Title className="text-capitalize">
                        State: {state}
                    </Card.Title>

                    <Card.Text>{description}</Card.Text>
                    <div className="d-flex justify-content-between">
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
                            {deleting ? "Loading..." : "Delete"}
                        </Button>
                        <div>
                            <Card.Text>
                                Created date:{" "}
                                {Moment(created).format("YYYY-MM-DD HH:m:s")}
                            </Card.Text>
                            <Card.Text>
                                Updated date:{" "}
                                {Moment(updated).format("YYYY-MM-DD HH:m:s")}
                            </Card.Text>
                        </div>
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
};
export default TaskCard;
