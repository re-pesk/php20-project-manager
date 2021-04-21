import React from 'react';
import classNames from 'classnames';
import { Container } from 'react-bootstrap';
import Header from '../../components/Header';
import Cards from '../../components/Cards';
import Footer from '../../components/Footer';
import { useSidebarContext } from '../../context/SidebarContext';

export default function Dashboard() {
    const { isOpen } = useSidebarContext;
    return (
        <Container
            fluid
            className={classNames('content', { 'is-open': isOpen })}
        >
            <Header title="Dashboard" />
            <Cards />
            <Footer />
        </Container>
    );
}
