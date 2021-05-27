import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useUserContext } from '../../context/UserContext';

const { axios } = window;

const IsLoggedIn = () => {
    const { userContext } = useUserContext({});
    const [localData, setLocalData] = useState({ ...userContext });

    const getUserData = async () => {
        const config = {
            method: 'post',
            url: '/api/logged-in',
            headers: {
                Accept: 'application/json',
            },
        };
        await axios(config)
            .then((response) => {
                // eslint-disable-next-line no-console
                console.log(response.data);
                setLocalData(response.data);
            })
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.log(error);
                if (error.response.status === 401) {
                    setLocalData(error);
                }
            });
    };

    const handleChange = async (event) => {
        event.preventDefault();
        try {
            await getUserData();
        } catch (e) {
            // eslint-disable-next-line no-alert
            alert(e.message);
        }
    };

    return (
        <Container>
            <pre id="output" className="mx-auto">
                {`Is user logged in? ${!!localData && !!localData.user}`}
                <br />
                User data:
                <br />
                {JSON.stringify(localData, null, 4)}
            </pre>
            <Button
                className="mt-3 mx-auto"
                variant="primary"
                type="submit"
                onClick={handleChange}
            >
                Is user logged?
            </Button>
        </Container>
    );
};

export default IsLoggedIn;
