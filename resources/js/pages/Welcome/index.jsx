import React from 'react';
import { Container } from 'react-bootstrap';
import ReactComponentSample from './ReactComponentSample';
import LaravelLogo from './LaravelLogo';
import Grid from './Grid';

export default function Welcome() {
    return (
        <>
            <ReactComponentSample />
            <Container
                // eslint-disable-next-line max-len
                className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0"
            >
                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <LaravelLogo />
                    <Grid />
                </div>
            </Container>
        </>
    );
}
