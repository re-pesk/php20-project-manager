/* eslint-disable no-console */
import axios from 'axios';

const log = [];

const Log = (action, logItem) => {
    if (process.env.FRONT_LOGS) {
        const config = {
            method: 'POST',
            url: '/api/log',
            data: log,
        };
        switch (action) {
        case 'add':
            log.push(logItem);
            break;
        case 'send':
            axios(config)
                .then((response) => {
                    log.length = 0;
                    console.log('Logging success', response);
                })
                .catch((error) => {
                    console.log('Logging failed', error);
                });
            break;
        default:
            console.log('No such log action');
            break;
        }
    }
};

export default Log;
