import React from 'react';

const DownloadButton = ({ endpoint, title }) => (
    <a className="btn btn-primary" href={endpoint}>{title}</a>
);

export default DownloadButton;
