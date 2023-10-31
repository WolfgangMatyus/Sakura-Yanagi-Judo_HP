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

function e() {
  e.preventDefault();
  var offcanvas = new bootstrap.Offcanvas(document.getElementById('staticBackdrop'));
  offcanvas.toggle();
}

function sendResetPasswordEmail() {
  alert("EMAIL GESENDET")
}

function changeActive(target){
  //console.log(target);
  active = document.getElementById("navbar-nav")
  console.log(active);
}

window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  if (window.scrollY > 10) {
    header.classList.add("header-collapsed"); // Füge die CSS-Klasse für den verkleinerten Header hinzu
  } else {
    header.classList.remove("header-collapsed"); // Entferne die CSS-Klasse, um den Header zurückzusetzen
  }
});


/* ---- SLIDESHOW-GALLERY ---- */


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

/* ---- SLIDESHOW-GALLERY ---- ENDE ---- */