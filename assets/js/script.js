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

function adjustTableDisplay() {
  var screenWidth = window.innerWidth;

  // Je nach Bildschirmbreite die Klassen hinzufügen oder entfernen
  if (screenWidth > 1050) {
    document.getElementById('eventList').classList.add('hidden');
    document.getElementById('eventTable').classList.remove('hidden');
  } else {
    document.getElementById('eventList').classList.remove('hidden');
    document.getElementById('eventTable').classList.add('hidden');
  }
}


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

