/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Gestion des évènements d'interaction
 * 
 */


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Sticky
 * 
 */

$(window).scroll(function(){

  if ($(window).scrollTop() > 100) {
    $('.navbar').addClass("sticky")
    $('.home').slideDown();
  } else {
    $('.navbar').removeClass("sticky");
    $('.home').slideUp();
  }
})


 /* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Carousel
 * 
 */

 
var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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
}

