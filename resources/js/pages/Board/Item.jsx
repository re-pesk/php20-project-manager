import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

const Item = ({ text, index }) => {
  return (
    <Draggable draggableId={text} index={index}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {text}
        </div>
      )}
    </Draggable>
  )
}

export default Item