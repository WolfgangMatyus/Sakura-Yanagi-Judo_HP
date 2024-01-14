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
          if (target === 'neues') {
            getNewsList();
            }
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

function loadModal() {

    $.ajax({
        url: '../component/content/modal.html',
        type: 'GET',
        dataType: 'html',
        success: function(data) {
        $('#myModal').html(data);
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

    eventData.sort(function(a, b) {
        var dateA = new Date(a.date);
        var dateB = new Date(b.date);
        return dateA - dateB;
    });

    var tableContainer = document.getElementById('eventTable');

    var table = document.createElement('table');
    table.setAttribute('class', 'table table-striped');

    var headers = ['Datum', 'Zeit', 'Veranstaltung', 'Ort'];

    var headerRow = document.createElement('tr');
    headers.forEach(function(headerText) {
        var th = document.createElement('th');
        th.appendChild(document.createTextNode(headerText));
        headerRow.appendChild(th);
    });
    headerRow.classList.add('header-row');
    table.appendChild(headerRow);

    eventData.forEach(function(event, index) {
        var formattedDate = formatDateString(event.date);
        var formattedTime = formatTimeString(event.time);

        var eventRow = document.createElement('tr');
        var eventValues = [formattedDate, formattedTime, event.event, event.place];

        eventValues.forEach(function(data) {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(data));
            eventRow.appendChild(td);
        });

        if (index % 2 === 1) {
            eventRow.classList.add('even-row');
        }
        else
        {
            eventRow.classList.add('odd-row');
        }

        table.appendChild(eventRow);
    });
    
    tableContainer.appendChild(table);
}

function createListContainer(eventData) {
    var listContainer = document.getElementById('eventList');

    var ul = document.createElement('ul');
    ul.setAttribute('class', 'list-group');

    eventData.forEach(function(event, index) {
        var formattedDate = formatDateString(event.date);
        var formattedTime = formatTimeString(event.time);

        var li = document.createElement('li');
        li.setAttribute('class', 'list-group-item');

        var listItemContent = `
            <strong>Datum:</strong> ${formattedDate}<br>
            <strong>Zeit:</strong> ${formattedTime}<br>
            <strong>Veranstaltung:</strong> ${event.event}<br>
            <strong>Ort:</strong> ${event.place}`;

        li.innerHTML = listItemContent;

        ul.appendChild(li);
    });

    listContainer.appendChild(ul);
}

function createNewsListContainer(eventData) {

    eventData.sort(function(a, b) {
        var dateA = new Date(a.date);
        var dateB = new Date(b.date);
        return dateA - dateB;
    });

    var listContainer = document.getElementById('newsContent');
   
    var ul = document.createElement('ul');
    ul.setAttribute('class', 'list-group');

        // Holen Sie das aktuelle Datum
        var currentDate = new Date();

        // Filtere die nächsten 3 Termine ab dem aktuellen Datum
        var upcomingEvents = eventData.filter(function(event) {
            var eventDate = new Date(event.date);
            return eventDate >= currentDate;
        }).slice(0, 3);

        // Iteriere über die nächsten 3 Termine
        upcomingEvents.forEach(function(event) {
            var formattedDate = formatDateString(event.date);
            var formattedTime = formatTimeString(event.time);

        // Erstelle ein LI-Element für jedes Ereignis
        var li = document.createElement('li');
        li.setAttribute('class', 'list-group-item');

        var listItemContent = `
            <div class="row">
                <div class="col"><strong>Datum:</strong></div>
                <div class="col"> ${formattedDate}<br></div>
            </div>
            <div class="row">
                <div class="col"><strong>Zeit:</strong></div>
                <div class="col">${formattedTime}<br></div>
            </div>
            <div class="row">
                <div class="col"><strong>Veranstaltung:</strong></div>
                <div class="col">${event.event}<br></div>
            </div>
            <div class="row">
                <div class="col"><strong>Ort:</strong></div>
                <div class="col">${event.place}</div>
            </div>`;
   
        li.innerHTML = listItemContent;
   
        ul.appendChild(li);
    });
    
    listContainer.appendChild(ul);
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
