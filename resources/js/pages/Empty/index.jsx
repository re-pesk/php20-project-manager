import React from 'react';
import classNames from 'classnames';
import { Container } from 'react-bootstrap';
import Header from '../../components/Header';
import { useSidebarContext } from '../../context/SidebarContext';
import Footer from '../../components/Footer';

const Content = () => {
    const { isOpen } = useSidebarContext;
    return (
        <Container
            fluid
            className={classNames('content', { 'is-open': isOpen })}
        >
            <Header title="Empty" />
            <Footer fixedBottom={true} />
        </Container>
    );
};

export default Content;
