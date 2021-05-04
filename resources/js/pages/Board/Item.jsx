import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Item = ({ task, index }) => (
    <Draggable draggableId={task.name} index={index}>
        {(provided) => (
            <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
            >
                {task.name}
            </div>
        )}
    </Draggable>
);

export default Item;
