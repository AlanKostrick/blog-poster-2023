import {
    LOGIN,
    LOGOUT,
    STATUS
} from './constants';

import { redirect } from 'react-router-dom';

export const authReducer = (state, action) => {
    switch (action.type) {
        case LOGOUT:
            window.sessionStorage.setItem('name', '');
            window.sessionStorage.setItem('token', '');
            return redirect('/');
        case LOGIN:

            break;
        case STATUS:
            const name = window.sessionStorage.getItem('name');
            const token = window.sessionStorage.getItem('token');
            const authSession = { name, token };
            return authSession;
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}