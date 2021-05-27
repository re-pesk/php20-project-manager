/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Item from './Item';

export default function Column({ col: { list, id }, cols, setCols }) {
    return (
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
                            <Item
                                key={task.name + task.id}
                                task={task}
                                index={index}
                                cols={cols}
                                setCols={setCols}
                            />
                        ))}
                        {provided.placeholder}
                    </div>
                </div>
            )}
        </Droppable>
    );
}
