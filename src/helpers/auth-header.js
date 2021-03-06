import { authenticationService } from '../services';

export function authHeader() {
    // return authorization header with jwt token
    const currentUser = authenticationService.currentUserValue;
    if (currentUser && currentUser.token) {
        return { Authorization: `Bearer ${currentUser.token}`, 'Content-Type': 'application/json' };
    } else {
        return {'Content-Type': 'application/json'};
    }
}

export function authHeaderDataForm() {
    // return authorization header with jwt token
    const currentUser = authenticationService.currentUserValue;
    if (currentUser && currentUser.token) {
        return { Authorization: `Bearer ${currentUser.token}`, 'Accept':'multipart/form-data'};
    } else {
        return { 'Accept':'multipart/form-data'};
    }
}