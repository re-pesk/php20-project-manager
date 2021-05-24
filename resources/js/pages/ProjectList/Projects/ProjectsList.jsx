/* eslint-disable no-console */
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { capitalize } from 'lodash';
import Moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import { Accordion, Button, Card, Container, Form, Spinner } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { useHistory } from 'react-router-dom';
import eventFire from '../../../components/EventFire';
import { useUserContext } from '../../../context/UserContext';

const Projects = () => {
    // back button
    const history = useHistory();
    // projects data
    const [projectsData, setProjectsData] = useState([]);
    // project delete
    const [idDelete, setIdDelete] = useState(0);
    // loading spinner
    const [loading, setLoading] = useState(true);
    // paginate
    const [currentPage, setCurrentPage] = useState(0);
    const [lastPage, setLastPage] = useState(0);
    const { handleShow, confirmedDeletion, confirmDeletion, canceledDeletion } = useUserContext();
    // used to set this particular project for deletion, this is local variable
    const [wantToDelete, setToDelete] = useState(false);
    const [idToDelete, setIdToDelete] = useState(0);
    // search
    const [searchVar, setSearchVar] = useState('');
    const [show, setShow] = useState(true);
    const [searchInit, setSearchInit] = useState(0);
    const [searchOption, setSearchOption] = useState('name');
    const [searchAnywhere, setSearchAnywhere] = useState(false);

    // useEffect(async () => {
    //     const config = {
    //         method: 'GET',
    //         url: `/api/projects?page=${currentPage}`,
    //         headers: {
    //             Accept: 'application/json',
    //         },
    //     };
    //     await axios(config)
    //         .then((response) => {
    //             console.log(response.data);
    //             setProjectsData(response.data.data);
    //             setLastPage(response.data.last_page);
    //             setLoading(false);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }, [idDelete, currentPage]);
    // console.log(projectsData);

    // search projects

    const handleInputChange = (event) => {
        setSearchVar(event.target.value);
    };

    useEffect(async () => {
        let config = {};
        if (searchVar !== '') {
            if (searchOption === 'id') {
                config = {
                    method: 'GET',
                    url: `/api/search-projects/by-id/${searchVar}?page=${currentPage}`,
                    headers: {
                        Accept: 'application/json',
                    },
                };
            } else if (searchOption === 'name' && !searchAnywhere) {
                config = {
                    method: 'GET',
                    url: `/api/search-projects/by-name/${searchVar}?page=${currentPage}`,
                    headers: {
                        Accept: 'application/json',
                    },
                };
            } else {
                config = {
                    method: 'GET',
                    url: `/api/search-projects/by-name-anywhere/${searchVar}?page=${currentPage}`,
                    headers: {
                        Accept: 'application/json',
                    },
                };
            }
        } else {
            config = {
                method: 'GET',
                url: `/api/projects?page=${currentPage}`,
                headers: {
                    Accept: 'application/json',
                },
            };
        }

        await axios(config)
            .then((response) => {
                console.log(response.data);
                // setProjectsData(response.data);
                setProjectsData(response.data.data);
                setLastPage(response.data.last_page);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
        console.log(searchVar);
    }, [searchInit, idDelete, currentPage]);

    // delete project
    const deleteProject = useCallback(
        async (deleteId) => {
            const config = {
                _method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                },
            };
            await axios
                .post(`/api/projects/${deleteId}`, config)
                .then((response) => {
                    console.log('Project deleted succesfuly', response);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        [],
    );

    // Change page
    const paginate = (e) => {
        const pageNumber = e.selected + 1;
        setCurrentPage(pageNumber);
        setLoading(true);
    };

    // used when project confirmed for deletion
    useEffect(() => {
        if (wantToDelete && confirmedDeletion) {
            setToDelete(false);
            confirmDeletion(false);
            deleteProject(idToDelete);
            setIdDelete(idToDelete);
            if (projectsData.length === 1 && currentPage !== 1) {
                eventFire(document.querySelector(`a[aria-label='Page ${currentPage - 1}']`), 'click');
            }
        }
    }, [confirmedDeletion]);

    // used when project refused for deletion
    useEffect(() => {
        setToDelete(false);
    }, [canceledDeletion]);

    return (
        <Container>
            <div>
                <Button
                    className="mb-3"
                    variant="primary"
                    type="submit"
                    onClick={() => {
                        history.push({ pathname: '/dashboard' });
                    }}
                >
                    Back
                </Button>
                <Button
                    className="mb-3"
                    style={{ float: 'right' }}
                    variant="primary"
                    type="submit"
                    onClick={() => {
                        history.push('/create-project/');
                    }}
                >
                    Create New Project
                </Button>
                <Button
                    className="mb-3 mr-2"
                    style={{ float: 'right' }}
                    variant="warning"
                    type="submit"
                    href="api/export/projects"
                >
                    Export Projects
                </Button>
                <Form>
                    <div className="mb-1" style={{ display: 'flex' }}>
                        <FontAwesomeIcon
                            icon={faSearch}
                            className="mt-1 mb-1"
                            style={{ cursor: 'pointer',
                                marginLeft: 'auto',
                                order: '2' }}
                            onClick={() => { setShow(!show); }}
                        />
                    </div>

                    {show ? (
                        <div>
                            <div>
                                <Form.Group className="w-100" style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                                    <Form.Control
                                        type="text"
                                        style={{
                                            order: '2',
                                        }}
                                        placeholder="Search..."
                                        onChange={handleInputChange}
                                        className="w-25"
                                    />
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        className="ml-1"
                                        style={{ order: '1' }}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setSearchInit(searchInit + 1);
                                        }}
                                    >
                                        Submit
                                    </Button>
                                </Form.Group>
                            </div>
                            <div className="mb-2" style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                                <span style={{ order: '23' }} className="mr-2">
                                    Search By:
                                </span>
                                <Form.Check
                                    type="radio"
                                    label="Name"
                                    style={{
                                        order: '2',
                                    }}
                                    className="mr-2"
                                    name="searchradio"
                                    id="formHorizontalRadios1"
                                    defaultChecked
                                    onClick={() => { setSearchOption('name'); }}
                                />
                                <Form.Check
                                    type="radio"
                                    label="ID"
                                    style={{
                                        order: '1',
                                    }}
                                    name="searchradio"
                                    id="formHorizontalRadios2"
                                    onClick={() => { setSearchOption('id'); }}
                                />
                            </div>
                            {searchOption === 'name' ? (
                                <div className="mb-3" style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                                    <Form.Check
                                        label="Search anywhere in the name"
                                        style={{
                                            order: '1',
                                        }}
                                        id="formCheckbox1"
                                        onClick={() => { setSearchAnywhere(!searchAnywhere); }}
                                    />
                                </div>
                            )
                                : null}
                        </div>
                    )
                        : null}

                </Form>
            </div>
            <Accordion>
                {/* Jei nera sukurta projektu */}
                {projectsData.length < 1 && currentPage === 1
                    ? (
                        <Card>
                            <Card.Header as="h4" className="text-center">
                                There are no projects yet.
                            </Card.Header>
                        </Card>
                    )
                    // Jei yra sukurta projektu
                    : null}
                {projectsData.map((project) => (
                    <Card key={project.id} id={project.id}>
                        <Accordion.Toggle
                            className="text-capitalize"
                            as={Button}
                            variant="light"
                            eventKey={project.id}
                        >
                            <Card.Header>
                                <div className="row">
                                    <div className="col d-flex justify-content-start align-self-center">
                                        <h4 className="align-self-center mt-2">
                                            <span className="badge bg-secondary text-light mr-2">{project.id}</span>
                                            {capitalize(project.name)}
                                        </h4>
                                    </div>
                                    <div className="col align-self-center">
                                        <div className="d-flex justify-content-start">
                                            <b>State:&nbsp; </b>
                                            <span className={
                                                project.state.name === 'in progress'
                                                    ? 'text-primary' : 'text-success'
                                            }
                                            >
                                                {project.state.name}
                                            </span>
                                        </div>
                                        <div className="d-flex justify-content-start">
                                            <b>Tasks Assigned:&nbsp;</b>
                                            <span className="text-primary">{project.tasks_count}</span>
                                        </div>
                                        <div className="d-flex justify-content-start">
                                            <b>Unfinished Tasks:&nbsp;</b>
                                            <span className="text-danger">{project.unfinished_tasks_count}</span>
                                        </div>
                                    </div>
                                    <div className="col align-self-center ">
                                        <div className="d-flex justify-content-end">
                                            <b>Created at:&nbsp; </b>
                                            {Moment(project.created_at).format('YYYY-MM-DD HH:mm:ss')}
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <b>Updated at:&nbsp; </b>
                                            {Moment(project.updated_at).format('YYYY-MM-DD HH:mm:ss')}
                                        </div>
                                    </div>
                                </div>
                            </Card.Header>
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey={project.id}>
                            <Card.Body className="bg-white">
                                <div className="row px-2">
                                    <Card.Text>{project.description}</Card.Text>
                                </div>
                                <div className="row mt-3 px-2 d-flex justify-content-start">
                                    <Button
                                        className="mr-2"
                                        type="submit"
                                        value={project.id}
                                        onClick={() => {
                                            // history.push(`/task/${project.id}`);
                                            history.push({ pathname: '/project/tasks',
                                                state: {
                                                    project: project.id,
                                                    task: null,
                                                } });
                                        }}
                                    >
                                        View tasks
                                    </Button>
                                    <Button
                                        className="mr-2"
                                        onClick={() => {
                                            history.push({ pathname: '/project/board',
                                                state: {
                                                    project: project.id,
                                                    task: null,
                                                } });
                                        }}
                                    >
                                        Show Board
                                    </Button>
                                    <Button
                                        className="mr-2"
                                        type="submit"
                                        value={project.id}
                                        onClick={() => {
                                            history.push({ pathname: '/update-project',
                                                state: {
                                                    project: project.id,
                                                    task: null,
                                                } });
                                        }}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        variant="danger"
                                        type="submit"
                                        value={project.id}
                                        onClick={() => {
                                            // show modal
                                            handleShow(true);
                                            // set this particular project as wanted for deletion
                                            setToDelete(true);
                                            setIdToDelete(project.id);
                                        }}
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                ))}

            </Accordion>
            <ReactPaginate
                pageCount={lastPage}
                pageRangeDisplayed={5}
                marginPagesDisplayed={2}
                onPageChange={paginate}
                initialPage={currentPage}
                containerClassName="nav justify-content-center nav-pills mt-2"
                pageClassName="nav-item mx-1"
                pageLinkClassName="nav-link"
                activeLinkClassName="active"
                nextLinkClassName="btn btn-link ml-1"
                previousLinkClassName="btn btn-link mr-1"
                breakClassName="pt-2"
            />
            {/* loading data spinneris */}
            {loading === true ? (
                <div className="mt-2 text-center font-weight-bold">
                    Loading data...
                    <Spinner animation="border" variant="primary" className="ml-2" />
                </div>
            ) : null}
        </Container>

    );
};
export default Projects;
