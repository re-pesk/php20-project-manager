import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Item from './Item';

const Column = ({ col: { list, id } }) => (
    <Droppable droppableId={id}>
        {(provided) => (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'rgba(23, 162, 184, 0.7)',
                    padding: '0 20px 20px 20px',
                    color: 'white',
                }}
            >
                <h2
                    className="pt-2 pl-2"
                >
                    {id}
                </h2>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '50vh',
                        overflowY: 'auto',
                    }}
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                >
                    {list.map((task, index) => (
                        <Item key={task.name + task.id} task={task} index={index} />
                    ))}
                    {provided.placeholder}
                </div>
            </div>
        )}
    </Droppable>
);

export default Column;
