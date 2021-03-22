import { REACT_APP_BE_URI } from 'config';

const getApiUrl = () => REACT_APP_BE_URI;
export const apiUrl = getApiUrl();

export const BACKEND_API = `${apiUrl}`;
