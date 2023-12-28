/* eslint-disable react-refresh/only-export-components */
import axios from 'axios';
import baseURL from './baseURL';

export default axios.create({
    baseURL : baseURL
});