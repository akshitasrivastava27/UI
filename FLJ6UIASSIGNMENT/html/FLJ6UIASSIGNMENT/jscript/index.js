document.addEventListener('DOMContentLoaded', function() {
    var myCarouselElement = document.querySelector('#carouselExampleAutoplaying');
    var carousel = new bootstrap.Carousel(myCarouselElement, {
      interval: 2000,
      wrap: true,
      touch: true
    });
  });

  function HomePage() {
    // Example of navigating to a different page
    window.location.href = 'events.html';
  }

  function bookEvent(){
    window.location.href="booking.html";
  }