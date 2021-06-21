import * as React from 'react';
import { emailList } from './team-data';

const HiddenEmail = ({ emailKey }) => (
    <span>{emailList[emailKey]}</span>
);

export default HiddenEmail;
