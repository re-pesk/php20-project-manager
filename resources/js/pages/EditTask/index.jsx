import React from 'react'
import classNames from 'classnames'
import { Container } from 'react-bootstrap'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useSidebarContext } from '../../context/SidebarContext'
import EditTaskForm from '../../components/EditTaskForm'

export default function EditTask() {
  const { isOpen } = useSidebarContext
  return (
    <Container fluid className={classNames('content', { 'is-open': isOpen })}>
      <Header title="Edit Task" />
      <EditTaskForm />
      <Footer />
    </Container>
  )
}
