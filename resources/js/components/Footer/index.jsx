import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

export default function Footer({ fixedBottom = false }) {
    // const style = (fixedBottom) => {
    //     if (fixedBottom) {
    //         return {
    //             backgroundColor: '#17a2b8',
    //             color: 'white',
    //             position: 'absolute',
    //             bottom: 0,
    //             right: 0,
    //             left: 0,
    //         };
    //     }
    //     return {
    //         backgroundColor: '#17a2b8',
    //         color: 'white',
    //     };
    // };

    return (
        <Container
            fluid
            bg="info"
            id="footer"
            className="px-0"
            // style={style(fixedBottom)}
        >
            <Navbar
                id="navbar"
                bg="info"
                className="navbar text-light shadow-sm p-3 m-0"
                expand
            >
                <footer className="footer mx-auto">
                    <span>
                        &copy; 2021 PHProjectMan team.
                    </span>
                </footer>
            </Navbar>
        </Container>
    );
}
