import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';

const { axios } = window;

const Logout = () => {
    const { previousPath } = '/';
    const { userContext, setUserContext } = useUserContext({});
    const { token } = userContext;
    const [path, setPath] = useState('/login');

    const check = async () => {
        if (!token) {
            return;
        }

        const config = {
            method: 'post',
            url: '/api/logout',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };

        await axios(config)
            .then((response) => {
                // eslint-disable-next-line no-console
                console.log(JSON.stringify(response.data));
                setUserContext({});
            })
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.log(error);
                setPath(previousPath);
            });
    };

    check();

    return (
        <Redirect to={path} />
    );
};

export default Logout;
