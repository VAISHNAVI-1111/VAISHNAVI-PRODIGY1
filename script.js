// script.js
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var nav = document.querySelector('#main-nav');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 100) {
      header.classList.add('scrolled');
      nav.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
      nav.classList.remove('scrolled');
    }
  });
  
  var navLinks = document.querySelectorAll('#main-nav a');
  
  navLinks.forEach(function(navLink) {
    navLink.addEventListener('mouseover', function() {
      this.style.color = '#ff6600'; // Change to your desired hover color
    });
  
    navLink.addEventListener('mouseout', function() {
      this.style.color = ''; // Reset to default color
    });
  });