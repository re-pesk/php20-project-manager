import React from 'react';
import { Nav } from 'react-bootstrap';

const Pagination = ({ projectsPerPage, totalProjects, paginate, currentPage }) => {
    const pageNumbers = [];
    const indexOfPage = Math.ceil(totalProjects / projectsPerPage);

    for (let i = 1; i <= indexOfPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <Nav variant="pills" defaultActiveKey={currentPage} className="d-flex justify-content-center">

            {pageNumbers.map((number) => (
                <Nav.Item key={number}>
                    <Nav.Link eventKey={number} onClick={() => paginate(number)}>
                        {number}
                    </Nav.Link>
                </Nav.Item>
            ))}

        </Nav>
    );
};
export default Pagination;