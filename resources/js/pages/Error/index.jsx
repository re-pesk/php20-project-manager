import React from 'react';
import classNames from 'classnames';
import { Container, Nav } from 'react-bootstrap';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useSidebarContext } from '../../context/SidebarContext';

export default function ErrorPage() {
    const goBack = (event) => {
        event.preventDefault();
        window.history.back();
    };
    const { isOpen } = useSidebarContext;
    return (
        <Container
            fluid
            className={classNames('content', { 'is-open': isOpen })}
        >
            <Header title="Error" />
            <h3>Error</h3>
            <p>
                Page does not exist!
            </p>
            <Nav className="mr-auto">
                <Nav.Item>
                    {/* eslint-disable-next-line no-script-url */}
                    <Nav.Link href="#" onClick={goBack}>Go back</Nav.Link>
                </Nav.Item>
            </Nav>
            <Footer />
        </Container>
    );
}
