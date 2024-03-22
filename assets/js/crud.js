function getEventList() {
    var apiEndpoint = 'http://localhost:8080/events';

    fetch(apiEndpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error('Fehler beim Laden der Daten von der API.');
            }
            return response.json();
        })
        .then(eventData => {
            createTable(eventData);
            createListContainer(eventData);
        })
        .catch(error => {
            console.error(error.message);
        });
}

function getNewsList() {
    var apiEndpoint = 'http://localhost:8080/events';

    fetch(apiEndpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error('Fehler beim Laden der Daten von der API.');
            }
            return response.json();
        })
        .then(eventData => {
            createNewsListContainer(eventData);
        })
        .catch(error => {
            console.error(error.message);
        });
}

function addNewUser() {

    var formData = {
        email: document.getElementById('Email').value,
        password: document.getElementById('passwordInput1').value,
        username: document.getElementById('Vorname').value + " " + document.getElementById('Familienname').value,
    }

    console.log(formData)

    var apiEndpoint = 'http://localhost:8080/addUser';

    fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Daten erfolgreich an die API gesendet:', data);
    })
    .catch(error => {
        console.error('Fehler beim Senden der Daten an die API:', error);
    });
}

function login() {

    var loginData = {
        username: document.getElementById('Username').value,
        password: document.getElementById('Password').value,
    }

    console.log(loginData)

    var apiEndpoint = 'http://localhost:8080/auth/token';

    fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Fehler beim Senden der Daten an die API.');
            }
            console.log(response.json())
            return response.json();
        })
        .then(data => {
            console.log('Daten erfolgreich an die API gesendet:', data);
        })
        .catch(error => {
            console.error('Fehler:', error.message);
        });
}