import React from 'react';
import { Col } from 'react-bootstrap';

const DownloadButton = ({ href, title }) => (
    <Col>
        <a className="btn btn-primary" href={href}>{title}</a>
    </Col>
);

export default DownloadButton;
