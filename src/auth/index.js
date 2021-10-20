import { API } from '../config';

export const signUp = (user) => {
    //call api
    return fetch(`${API}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}
export const signIn = (user) => {
    return fetch(`${API}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}
export const signOut = (next) => {
    if (typeof window != "undefined") {
        localStorage.removeItem('user');
        next();
        return fetch(`${API}/signout`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .catch(error => console.log(error))

    }
}
export const authenticate = (data, next) => {
    if (typeof window !== "undefined") {
        localStorage.setItem('user', JSON.stringify(data));
        next();
    }
}
export const isAuthenticated = () => {
    if (typeof window == 'undefined') {
        return false
    }
    if (localStorage.getItem('user')) {
        return JSON.parse(localStorage.getItem('user'))
    }
    else {
        return false
    }
}
