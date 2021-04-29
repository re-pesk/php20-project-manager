import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import classNames from 'classnames'
import { useSidebarContext } from '../../context/SidebarContext'
import Item from './Item'
import Column from './Column'
import { DragDropContext } from 'react-beautiful-dnd'

export default function Board() {
  const { isOpen } = useSidebarContext
  const [list, setList] = useState(['Item 1', 'Item 2', 'Item 3'])

  const initialColumns = {
    todo: {
      id: 'todo',
      list: ['item 1', 'item 2', 'item 3'],
    },
    doing: {
      id: 'doing',
      list: [],
    },
    done: {
      id: 'done',
      list: [],
    },
  }
  
  const [columns, setColumns] = useState(initialColumns)

  const onDragEnd = ({ source, destination }) => {
    // Make sure we have a valid destination
    if (destination === undefined || destination === null) {
        return null
    }

    // If the source and destination columns are the same
    // AND if the index is the same, the item isn't moving
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    ) {
        return null
    }

    // Set start and end variables
    const start = columns[source.droppableId]
    const end = columns[destination.droppableId]

    // If start is the same as end, we're in the same column
    if (start === end) {
      // Move the item within the list
      // Start by making a new list without the dragged item
      const newList = start.list.filter(
        (_, idx) => idx !== source.index
      )

      // Then insert the item at the right location
      newList.splice(destination.index, 0, start.list[source.index])

      // Then create a new copy of the column object
      const newCol = {
        id: start.id,
        list: newList
      }

      // Update the state
      setColumns(state => ({ ...state, [newCol.id]: newCol }))
      return null
    } else {
        // If start is different from end, we need to update multiple columns
        // Filter the start list like before
        const newStartList = start.list.filter(
          (_, idx) => idx !== source.index
        )
  
        // Create a new start column
        const newStartCol = {
          id: start.id,
          list: newStartList
        }
  
        // Make a new end list array
        const newEndList = end.list
  
        // Insert the item into the end list
        newEndList.splice(destination.index, 0, start.list[source.index])
  
        // Create a new end column
        const newEndCol = {
          id: end.id,
          list: newEndList
        }
  
        // Update the state
        setColumns(state => ({
          ...state,
          [newStartCol.id]: newStartCol,
          [newEndCol.id]: newEndCol
        }))
        return null
      }
  }

    return (
        <Container>
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
