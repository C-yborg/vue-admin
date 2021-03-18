import cookie from 'cookie_js';

const adminToken = 'admin_toKen';

export function getToken() {
    return cookie.get(adminToken);
}

export function setToken() {
    return cookie.set(adminToken, toKen);
}

export function removeToken() {
    return cookie.remove(adminToken);
}

export function setUsername() {
    return cookie.set('username', value);
}
