
$(document).ready(function(){
  // Quando viene cliccato il link
  $('#scrollToTop').click(function(){
      // Scorri fino alla cima della pagina
      $('html, body, main').animate({scrollTop : 0},200);
      return false;
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const splashScreen = document.querySelector('.splash-screen');

  // Nascondi lo splash screen dopo 2 secondi
  setTimeout(function() {
      hideSplashScreen();
  }, 1500); // Ritardo di 2000 millisecondi (2 secondi) prima di nascondere lo splash screen

  // Funzione per nascondere lo splash screen
  function hideSplashScreen() {
      // Applica l'animazione di dissolvenza dopo un breve ritardo
      setTimeout(function() {
          splashScreen.style.animation = 'fadeOut 1.5s forwards'; // Avvia l'animazione di dissolvenza
      }, 50); // Ritardo breve prima di applicare l'animazione
      // Nasconde completamente lo splash screen dopo l'animazione
      setTimeout(function() {
          splashScreen.style.display = 'none';
      }, 1500); // Nasconde lo splash screen dopo 2 secondi (durata dell'animazione)
  }
});

//
//
//
//
// Script al caricamento della pagina
 
window.onload = () => {

    // SCROLL DELLA PAGINA E MODIFICA DELLA GRANDEZZA DEL MENU DI NAVIGAZIONE
    window.addEventListener('scroll', function() {
      var header = document.querySelector('header');
      if (window.scrollY > 0) {
          header.classList.add('scrolledHeader');
      } else {
          header.classList.remove('scrolledHeader');
      }
    });

    window.addEventListener('scroll', function() {
      const header = document.getElementById('header');
      const main = document.getElementById('main');
      const titleAnchor = document.querySelector('.menu-left .title a');
  
      if (window.scrollY > 0) {
          header.classList.add('header-scrolled');
          // Rimuovi il tag <br> dalla stringa di testo
          titleAnchor.innerHTML = "F800";
      } else {
          header.classList.remove('header-scrolled');
          // Reimposta la stringa di testo originale
          titleAnchor.innerHTML = "Fiorenzuola <br> si racconta, <br> l'800 svelato";
      }
  });



//COLLAPSE DEI MENU
const collapsibleToggles = document.querySelectorAll('.collapsible-toggle');

collapsibleToggles.forEach(function(toggle) {
  toggle.addEventListener('change', function(event) {
    event.preventDefault(); // Previene il comportamento predefinito del cambio di stato del collapsible
    
    if (this.checked) {
      
      //var altezza = contenuto + header;
      // Chiudi tutti i collapsible tranne quello corrente
      collapsibleToggles.forEach(function(otherToggle) {
        if (otherToggle !== toggle) {
          otherToggle.checked = false;
        }
      });

      // Scrolla il collapsible appena aperto nella vista se necessario
      const topPosition = toggle.parentElement.offsetTop - 91; // Posizione desiderata a 91px dal margine superiore
      //console.log(topPosition);
      window.scrollTo({ top: topPosition, behavior: 'smooth', duration: 500 });
    }
  });
});




       

}
  
document.addEventListener('DOMContentLoaded', function() {
  const containers = document.querySelectorAll('.image-container');

  containers.forEach(function(container) {
      const overlay = container.querySelector('.overlay');
      const overlayImage = overlay.querySelector('#overlay-image');
      const images = container.querySelectorAll('.scans');
      let currentIndex = 0;

      function initializeOverlay(index) {
          const imageUrl = images[index].src;
          overlayImage.src = imageUrl;
          overlay.style.display = 'flex';
          currentIndex = index;
      }

      function showPrevImage() {
          currentIndex = (currentIndex - 1 + images.length) % images.length;
          const imageUrl = images[currentIndex].src;
          overlayImage.src = imageUrl;
      }

      function showNextImage() {
          currentIndex = (currentIndex + 1) % images.length;
          const imageUrl = images[currentIndex].src;
          overlayImage.src = imageUrl;
      }

      const closeBtn = overlay.querySelector('.closeBtn');
      if (closeBtn) {
          closeBtn.addEventListener('click', function() {
              overlay.style.display = 'none';
          });
      }

      overlay.addEventListener('click', function(event) {
          if (event.target === overlay) {
              overlay.style.display = 'none';
          }
      });

      const prevBtn = overlay.querySelector('#prevBtn');
      const nextBtn = overlay.querySelector('#nextBtn');

      if (prevBtn) {
          prevBtn.addEventListener('click', function() {
              showPrevImage();
          });
      }

      if (nextBtn) {
          nextBtn.addEventListener('click', function() {
              showNextImage();
          });
      }

      images.forEach(function(image, index) {
          image.addEventListener('click', function() {
              initializeOverlay(index);
          });
      });
  });
});




