import React from 'react'
import classNames from 'classnames'
import { Container } from 'react-bootstrap'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useSidebarContext } from '../../context/SidebarContext'
import EditTaskForm from '../../components/EditTaskForm'
import { useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap'

export default function EditTask() {
  const { isOpen } = useSidebarContext;
  const history = useHistory();
  return (
    <Container fluid className={classNames('content', { 'is-open': isOpen })}>
      <Header title="Edit Task" />
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
      <EditTaskForm />
      <Footer />
    </Container>
  )
}
