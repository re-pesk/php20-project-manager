import React from 'react';
import classNames from 'classnames';
import { Container } from 'react-bootstrap';
import ReactComponentSample from './ReactComponentSample';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LaravelLogo from './LaravelLogo';
import Grid from './Grid';
import { useSidebarContext } from '../../context/SidebarContext';

export default function Welcome() {
    const { isOpen } = useSidebarContext;
    const { isAuthenticated, url, urlRegister } = window.welcomeData;
    let linkText = 'Home';
    if (isAuthenticated) {
        linkText = 'Log in';
    }
    return (
        <Container
            fluid
            className={classNames('content', { 'is-open': isOpen })}
        >
            <Header title="Welcome" />
            <ReactComponentSample />
            <Container
                // eslint-disable-next-line max-len
                className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0"
            >
                {
                    url === ''
                        ? ''
                        : (
                            <div className="hidden fixed top-0 right-0 px-6 py-4 sm:block">
                                <a href={url} className="text-sm text-gray-700 underline">{linkText}</a>
                                {
                                    urlRegister === ''
                                        ? ''
                                        : (
                                            <a href={urlRegister} className="ml-4 text-sm text-gray-700 underline">
                                                Register
                                            </a>
                                        )
                                }
                            </div>
                        )
                }

                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <LaravelLogo />
                    <Grid />
                </div>
            </Container>
            <Footer />
        </Container>
    );
}
