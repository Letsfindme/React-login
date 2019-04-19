import { authHeader } from "../_helpers";

export const userService = {
    login,
    login2,
    register,
    logout,
    getAll
};

function register(firstName, lastname, birthDate, username, password) {
    let formBody = JSON.stringify({
        birthDate: "1999-12-02",
        firstName: firstName,
        lastName: lastname,
        userAccount: {
            username: username,
            password: password
        }

    });
    console.log(formBody)
    fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formBody
        
    }).then((responseData) => {
        console.log(responseData);

    });

}

function login2(username, password) {
    console.log('login2')
    let details = {
        'username': username,
        'password': password
    };

    let formBody = [];
    for (let property in details) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    console.log(formBody);
    fetch('http://localhost:8080/login', {
        method: 'POST',
        headrs: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formBody,
        mode: 'no-cors',
        withCredentials: true,
        credentials: 'include'
    })
        .then((responseData) => {
            console.log(responseData);
        });
}

function login(username, password) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    };

    return fetch(`/users/authenticate`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // login successful if there's a user in the response
            if (user) {
                // store user details and basic auth credentials in local storage
                // to keep user logged in between page refreshes
                // user.authdata = window.btoa(username + ":" + password);
                localStorage.setItem("user", JSON.stringify(user));
            }

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("user");
}

function getAll() {
    const requestOptions = {
        method: "GET",
        headers: authHeader()
    };

    return fetch(`/users`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
