import React from 'react'
import classNames from 'classnames'
import { Container } from 'react-bootstrap'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useSidebarContext } from '../../context/SidebarContext'
import CreateTaskForm from '../../components/CreateTaskForm'
import { useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap'

export default function CreateTask() {
  const { isOpen } = useSidebarContext;
  const history = useHistory();
  return (
    <Container fluid className={classNames('content', { 'is-open': isOpen })}>
      <Header title="Create Task" />
      <Button
        className="ml-5"
        variant="primary"
        type="submit"
        onClick={() => {
          history.goBack()
        }}
      >
        Back
      </Button>
      <CreateTaskForm />
      <Footer />
    </Container>
  )
}
