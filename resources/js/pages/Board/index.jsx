import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { DragDropContext } from 'react-beautiful-dnd';
import { useHistory } from 'react-router';
import axios from 'axios';
import { useSidebarContext } from '../../context/SidebarContext';
import Column from './Column';

export default function Board() {
    const { isOpen } = useSidebarContext;
    const history = useHistory();
    const [columns, setColumns] = useState([]);

    useEffect(async () => {
        const config = {
            method: 'GET',
            url: `/api/projectTasks/${history.location.state.project}`,
            headers: {
                Accept: 'Application/json',
            },
        };
        await axios(config)
            .then((response) => {
                // console.log(response.data.tasksData.data);

                const initialColumns = {
                    'to do': {
                        id: 'to do',
                        list: [],
                    },
                    'in progress': {
                        id: 'in progress',
                        list: [],
                    },
                    done: {
                        id: 'done',
                        list: [],
                    },
                };

                response.data.tasksData.data.forEach((task) => {
                    // console.log(task);
                    if (task.state === 'to do') {
                        initialColumns['to do'].list.push(task);
                    }
                    if (task.state === 'in progress') {
                        initialColumns['in progress'].list.push(task);
                    }
                    if (task.state === 'done') {
                        initialColumns.done.list.push(task);
                    }
                });
                console.log(initialColumns);
                setColumns(initialColumns);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const onDragEnd = ({ source, destination }) => {
    // Make sure we have a valid destination
        if (destination === undefined || destination === null) {
            return null;
        }

        // If the source and destination columns are the same
        // AND if the index is the same, the item isn't moving
        if (
            source.droppableId === destination.droppableId
      && destination.index === source.index
        ) {
            return null;
        }

        // Set start and end variables
        const start = columns[source.droppableId];
        const end = columns[destination.droppableId];

        // If start is the same as end, we're in the same column
        if (start === end) {
            // Move the item within the list
            // Start by making a new list without the dragged item
            const newList = start.list.filter(
                (_, idx) => idx !== source.index,
            );

            // Then insert the item at the right location
            newList.splice(destination.index, 0, start.list[source.index]);

            // Then create a new copy of the column object
            const newCol = {
                id: start.id,
                list: newList,
            };

            // Update the state
            setColumns((state) => ({ ...state, [newCol.id]: newCol }));
            return null;
        }

        // If start is different from end, we need to update multiple columns
        // Filter the start list like before
        const newStartList = start.list.filter(
            (_, idx) => idx !== source.index,
        );

        // Create a new start column
        const newStartCol = {
            id: start.id,
            list: newStartList,
        };

        // Make a new end list array
        const newEndList = end.list;

        // Insert the item into the end list
        newEndList.splice(destination.index, 0, start.list[source.index]);

        // Create a new end column
        const newEndCol = {
            id: end.id,
            list: newEndList,
        };

        // Update the state
        setColumns((state) => ({
            ...state,
            [newStartCol.id]: newStartCol,
            [newEndCol.id]: newEndCol,
        }));

        const states = { 'to do': 1, 'in progress': 2, done: 3 };
        const priorities = { low: 1, medium: 2, high: 3 };
        console.log(start.list[source.index]);

        const config = {
            method: 'PUT',
            url: `/api/tasks/${start.list[source.index].id}`,
            data: {
                name: start.list[source.index].name,
                description: start.list[source.index].description,
                priority_id: priorities[start.list[source.index].priority],
                task_state_id: states[newEndCol.id],
            },
        };

        axios(config)
            .then((response) => {
                // eslint-disable-next-line no-console
                console.log(response);
            })
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.log(error);
            });
        return null;
    };

    return (
        <Container>
            <Button
                className="text-center"
                variant="primary"
                type="submit"
                onClick={() => {
                    history.goBack();
                }}
            >
                Back
            </Button>
            <DragDropContext onDragEnd={onDragEnd}>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr 1fr',
                        margin: '24px auto',
                        width: '80%',
                        gap: '8px',
                    }}
                >
                    {Object.values(columns).map((col) => (
                        <Column col={col} key={col.id} />
                    ))}
                </div>
            </DragDropContext>
        </Container>
    );
}
