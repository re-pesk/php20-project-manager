import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import axios from "axios";

const TaskCard = ({ name, id, priority, state, description }) => {
    const [deleting, setDeleting] = useState(false);
    const [idDelete, setIdDelete] = useState(0);
    const [deleteMessage, setDeleteMessage] = useState([]);

    const selectDeleteId = (deleteId) => {
        setIdDelete(+deleteId.target.value);
        setDeleting(true);
        deleteTask(idDelete);
    };
    // useEffect(() => {
    //     console.log(`id is ${idDelete}`);
    // }, [idDelete]);

    const deleteTask = async (taskId) => {
        console.log(typeof taskId);
        console.log(`/api/projectTasks/${taskId}`);
        const config = {
            _method: "DELETE",
            headers: {
                Accept: "application/json",
            },
        };
        await axios
            .post(`/api/projectTasks/19`, config)
            .then((response) => {
                // eslint-disable-next-line no-console
                setDeleting(false);
                setDeleteMessage(response);
            })
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.log(error);
                setDeleting(false);
            });
    };

    return (
        <Card key={id} id={id}>
            <Card.Header as="h4">
                {id} {priority} {state}
            </Card.Header>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button
                    variant="danger"
                    type="submit"
                    value={id}
                    onClick={selectDeleteId}
                >
                    {deleting ? "Loading..." : "Delete"}
                </Button>
            </Card.Body>
        </Card>
    );
};
export default TaskCard;
