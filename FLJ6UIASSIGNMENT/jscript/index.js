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
  function ConfirmationPage(){
    window.location.href="confirmation.html";
  }


function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
  }
  
  function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
  }