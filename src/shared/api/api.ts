import axios, { AxiosRequestHeaders } from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

const baseUrl = __IS_DEV__ ? 'http://localhost:3000' : 'https://productionlink.net';

export const $api = axios.create({
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY),
    } as AxiosRequestHeaders,
});
