import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import axios from "axios";
import { Forum } from "@material-ui/icons";

const TaskCard = ({ name, id, priority, state, description }) => {
    const [deleting, setDeleting] = useState(false);
    const [idDelete, setIdDelete] = useState(0);
    const [deleteMessage, setDeleteMessage] = useState([]);

    const selectDeleteId = async (deleteId) => {
        await setIdDelete(deleteId.target.value);
        setDeleting(true);
        await deleteTask(idDelete);
    };

    const deleteTask = async (taskId) => {
        console.log(`/api/projectTasks/${taskId}`);
        const config = {
            url: `/api/projectTasks/${taskId}`,
            headers: {
                Accept: "application/json",
            },
        };
        await axios
            .delete(config)
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
