import React from 'react';
import { Container, Col } from 'react-bootstrap';
import FooterLink from './FooterLink';

export default function Footer() {
    const { laravelVersion, phpVersion } = window.welcomeData;
    return (
        <Container
            id="footer"
            className="flex justify-center mt-4 mb-4 sm:items-center sm:justify-between"
        >
            <Col className="text-center text-sm text-gray-500 text-left mr-auto">
                <div className="flex items-center">
                    <FooterLink url="https://laravel.bigcartel.com" text="Shop" />
                    <FooterLink url="https://github.com/sponsors/taylorotwell" text="Sponsor" classTxt="ml-4" />
                </div>
            </Col>
            <Col className="ml-auto text-right text-sm text-gray-500 sm:text-right sm:ml-0">
                {`Laravel v${laravelVersion}`}
                {' '}
                {`(PHP v${phpVersion})`}
            </Col>
        </Container>
    );
}
