function getEventList() {
    var apiEndpoint = 'http://127.0.0.1:8080/events';

    fetch(apiEndpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error('Fehler beim Laden der Daten von der API.');
            }
            return response.json();
        })
        .then(eventData => {
            createTable(eventData);
        })
        .catch(error => {
            console.error(error.message);
        });
}