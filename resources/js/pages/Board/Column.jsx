import React from 'react'
import Item from './Item'
import { Droppable } from 'react-beautiful-dnd'

const Column = ({ col: { list, id } }) => {
    return (
      <Droppable droppableId={id}>
        {provided => (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgba(23, 162, 184, 0.7)',
              padding: '20px',
              color: 'white',
            }}
            >
            <h2>{id}</h2>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '120px'
              }}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {list.map((text, index) => (
                <Item key={text} text={text} index={index} />
              ))}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    )
  }

export default Column;