import * as React from 'react';

const emailList = {
    akvile: 'akvile.gurskaite@gmail.com',
    arnoldas: 'arnoldas.venckus@gmail.com',
    julius: 'julius.cincikas@gmail.com',
    karolis: 'karolis.kvatavicius@gmail.com',
    marius: 'marius.serys@gmail.com',
    redas: 'redas.peskaitis@gmail.com',
    zilvinas: 'zil.kazakauskas@gmail.com',
};

const HiddenEmail = ({ emailKey }) => (
    <span>{emailList[emailKey]}</span>
);

export default HiddenEmail;
