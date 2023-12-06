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
          pathEncryption();
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
  alert("EMAIL GESENDET");
}

function changeActive(target){
  
  var linkElement = document.getElementById(""+target+"");
    var link = linkElement.querySelector("a");
    
    var navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(function(link) {
      link.classList.remove("active");
    });
    
    link.classList.add("active");
}
function removeShowNavToggler() {
   $("#navbarToggler").removeClass("show")
};

/* ---- SLIDESHOW-GALLERY ---- 

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

 ---- SLIDESHOW-GALLERY ---- ENDE ---- */

