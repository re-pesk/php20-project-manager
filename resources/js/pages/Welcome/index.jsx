import { faPhp, faReact } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../../../css/welcome.css';
import { useUserContext } from '../../context/UserContext';
// import { useHistory } from 'react-router-dom';
// import ReactComponentSample from './ReactComponentSample';
// import LaravelLogo from './LaravelLogo';
// import Grid from './Grid';

export default function Welcome() {
    const { userContext } = useUserContext({});

    return (
        <>
            <Container fluid className="background">
                <Container>
                    <Row>
                        <Col>
                            <p className="title pt-2">PHProjectMan</p>
                        </Col>
                    </Row>
                    <Row className="pb-3 mainrow">
                        <Col className="font col-left">
                            <Image src="../../../img/multitasking.jpeg" className="w-100" />
                        </Col>
                        {
                            userContext.user
                                ? (
                                    <Col className="font ml-0 mr-0 col-right">
                                        <div className="signup p-3 rounded-top">
                                            <p className="pt-3 pr-3 pl-3 signuptext" style={{ fontSize: '2.5rem' }}>
                                                Click on the sidebar on the left to navigate within the app!
                                            </p>
                                        </div>
                                    </Col>
                                )
                                : (
                                    <Col className="font ml-0 mr-0 col-right">
                                        <div className="signup p-3 rounded-top">
                                            <p className="pt-3 pr-3 pl-3 signuptext">
                                                Sign up for an unlimited free trial today!
                                                <br />
                                                <LinkContainer to="/register">
                                                    <Button
                                                        className="btn-lg sgnupbutton"
                                                    >
                                                        Sign Up

                                                    </Button>
                                                </LinkContainer>
                                            </p>
                                        </div>
                                        <div className="pb-3 pr-3 pl-3 logintext rounded-bottom">
                                            <p>
                                                Already have an account? Click
                                                <LinkContainer to="/login">
                                                    <b><span className="loginlink"> Here </span></b>
                                                </LinkContainer>
                                                to Login!
                                            </p>
                                        </div>
                                    </Col>
                                )
                        }
                    </Row>
                    <Row>
                        <Col>
                            <div className="secondRowTitle pt-3 pb-3">
                                Project management has never been so easy.
                            </div>
                        </Col>
                    </Row>
                    <Row className="pt-5 pb-5">
                        <Col>
                            <div className="features p-4 rounded">
                                <span style={{ fontSize: '2rem' }}>Our app features include:</span>
                                <ul style={{ listStyleType: 'none' }}>
                                    <li>
                                        Convenient CRUD functionality.
                                    </li>
                                    <li>
                                        Search options.
                                    </li>
                                    <li>
                                        Smooth authentication system.
                                    </li>
                                    <li>
                                        Ability to export data.
                                    </li>
                                    <li>
                                        Functional task board.
                                    </li>
                                    <li>
                                        Style, speed and more!
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <div
                                className="lastcolumn"
                                style={{ fontSize: '3rem' }}
                            >
                                Made
                            </div>
                            <div
                                className="lastcolumn"
                                style={{ fontSize: '3rem' }}
                            >
                                With
                            </div>
                            <div
                                className="lastcolumn"
                                style={{ fontSize: '3rem' }}
                            >
                                <FontAwesomeIcon icon={faHeart} />
                            </div>
                            <div
                                className="lastcolumn"
                                style={{ fontSize: '2rem' }}
                            >
                                And
                            </div>
                            <div
                                className="lastcolumn"
                                style={{ fontSize: '3rem' }}
                            >
                                <FontAwesomeIcon icon={faPhp} />
                                {' '}
                                +
                                {' '}
                                <FontAwesomeIcon icon={faReact} />
                            </div>
                            <div className="lastcolumn" style={{ fontSize: '1rem' }}>Also CSS and HTML</div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}
