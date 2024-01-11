function build(){
    loadBanner();
    loadNavbar();
    loadBody();
    loadFooter();
}

function loadContent(target) {
    
    $.ajax({
        url: '../component/content/' + target + '.html',
        type: 'GET',
        dataType: 'html',
        success: function(data) {
          $('#content').html(data);
          changeActive(target);
          removeShowNavToggler();
          if (target === 'termine') {
            getEventList();
            }
        },
        error: function() {
          //alert('Fehler beim Laden der Datei.');
          window.location.href = 'error.html';
        }
      });      
}

function loadBanner() {

    $.ajax({
        url: '../component/banner.html',
        type: 'GET',
        dataType: 'html',
        success: function(data) {
          $('#banner').html(data);
        },
        error: function() {
          //alert('Fehler beim Laden der Datei.');
          window.location.href = 'error.html';
        }
      });
}

function loadNavbar() {

    $.ajax({
        url: '../component/navbar.html',
        type: 'GET',
        dataType: 'html',
        success: function(data) {
          $('#navbar').html(data);
        },
        error: function() {
          //alert('Fehler beim Laden der Datei.');
          window.location.href = 'error.html';
        }
      });
}

function loadBody() {

    $.ajax({
        url: '../component/body.html',
        type: 'GET',
        dataType: 'html',
        success: function(data) {
          $('#subbody').html(data);
        },
        error: function() {
          //alert('Fehler beim Laden der Datei.');
          window.location.href = 'error.html';
        }
      });
}

function loadFooter() {

    $.ajax({
        url: '../component/footer.html',
        type: 'GET',
        dataType: 'html',
        success: function(data) {
          $('#footer').html(data);
        },
        error: function() {
          //alert('Fehler beim Laden der Datei.');
          window.location.href = 'error.html';
        }
      });
}

function createTable(eventData) {

    // Tabellen-Container
    var tableContainer = document.getElementById('eventTable');

    // Tabelle erstellen
    var table = document.createElement('table');
    table.setAttribute('class', 'table table-striped');

    // Überschriften
    var headers = ['Datum', 'Zeit', 'Veranstaltung', 'Ort'];

    // Header-Row erstellen
    var headerRow = document.createElement('tr');
    headers.forEach(function(headerText) {
        var th = document.createElement('th');
        th.appendChild(document.createTextNode(headerText));
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Rows aus API-Daten erstellen
    eventData.forEach(function(event) {
        // Daten bearbeiten
        var formattedDate = formatDateString(event.date);
        var formattedTime = formatTimeString(event.time);

        console.log(event)
        console.log(event.eventType, event.location)

        var eventRow = document.createElement('tr');
        var eventValues = [formattedDate, formattedTime, event.event, event.place];

        eventValues.forEach(function(data) {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(data));
            eventRow.appendChild(td);
        });

        table.appendChild(eventRow);
    });
    
    tableContainer.appendChild(table);
}

function formatDateString(dateString) {
    var date = new Date(dateString);
    var day = date.getDate().toString().padStart(2, '0');
    var month = (date.getMonth() + 1).toString().padStart(2, '0');
    var year = date.getFullYear();
    return `${day}.${month}.${year}`;
}

// Funktion zum Formatieren der Uhrzeit
function formatTimeString(timeString) {
    var time = new Date(`1970-01-01T${timeString}Z`);
    var hours = time.getUTCHours().toString().padStart(2, '0');
    var minutes = time.getUTCMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}