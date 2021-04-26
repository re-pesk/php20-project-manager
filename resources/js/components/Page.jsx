import React from 'react';
import classNames from 'classnames';
import { Container } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import { useSidebarContext } from '../context/SidebarContext';

const Page = ({ children, title }) => {
    const { isOpen } = useSidebarContext;

    return (
        <Container
            fluid
            className={classNames('content', 'd-flex', 'flex-column', 'min-vh-100', { 'is-open': isOpen })}
        >
            <Header title={title} />
            {children}
            <Footer />
        </Container>
    );
};

export default Page;
