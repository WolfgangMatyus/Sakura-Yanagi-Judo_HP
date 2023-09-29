function build(){
    loadBanner();
    loadNavbar();
    loadBody();
    loadFooter()
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
          $('#content').html(data);
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

function navbar() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


var banner = $('#banner');
var bannerHeight = banner.outerHeight(); // Höhe des ursprünglichen Banners
var shrinkHeight = bannerHeight * 0.5; // Höhe nach der Verkleinerung (50%)

$(window).scroll(function() {
    if ($(this).scrollTop() > bannerHeight) {
        banner.addClass('banner-shrink');
    } else {
        banner.removeClass('banner-shrink');
    }
});
