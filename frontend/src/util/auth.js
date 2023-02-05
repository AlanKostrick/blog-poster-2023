export function getAuthToken() {
    const token = sessionStorage.getItem('token');
    return token;
}