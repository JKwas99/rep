var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");

// Pobierz przyciski, które otwierają modale
var btn1 = document.getElementById("openModal1");
var btn2 = document.getElementById("openModal2");
var btn3 = document.getElementById("openModal3");

// Pobierz elementy <span>, które zamykają modale
var span1 = modal1.getElementsByClassName("close")[0];
var span2 = modal2.getElementsByClassName("close")[0];
var span3 = modal3.getElementsByClassName("close")[0];

// Funkcje obsługujące otwieranie i zamykanie modali
btn1.onclick = function() {
    modal1.style.display = "block";
}

btn2.onclick = function() {
    modal2.style.display = "block";
}

btn3.onclick = function() {
    modal3.style.display = "block";
}

span1.onclick = function() {
    modal1.style.display = "none";
}

span2.onclick = function() {
    modal2.style.display = "none";
}

span3.onclick = function() {
    modal3.style.display = "none";
}

// Funkcja zamykająca modal po kliknięciu gdziekolwiek poza nim
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}
// function losoweStyle() {
//     const elementy = document.querySelectorAll('.moveLi');
//     kolory = ["#EEEEEE", "#b3ff01", "#2196F3"];
    
//     elementy.forEach(element => {
//         const kolorTekstu = `${kolory[Math.floor(Math.random() * 3)]}`;
//         element.style.color = kolorTekstu;
//         element.style.background = "transparent"
//     });

//     for(let i=0;i<5;i++){
//         elementy[Math.floor(Math.random() * elementy.length)].style.background = '#b3b3b32a'
//     }
// }

// losoweStyle();
// setInterval(losoweStyle, 3000); // Wywołanie funkcji co 3 sekundy

let element = document.getElementById("poznaj")

element.addEventListener('click', ()=>{
    document.getElementById('filmik').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

let tok = document.getElementById("tok")
let tik = document.getElementById("tik")

tok.addEventListener("mouseover", ()=>{
    tik.src = "images/tiktok2.svg"
})
tok.addEventListener("mouseleave", ()=>{
    tik.src = "images/tiktok.svg"
})
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.content-child img');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    document.getElementById('prevBtn').addEventListener('click', function() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        images[currentIndex].classList.add('active');
    });

    document.getElementById('nextBtn').addEventListener('click', function() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        images[currentIndex].classList.add('active');
    });

    function autoNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        images[currentIndex].classList.add('active');
    }

    setInterval(autoNextImage, 3000); // Change image every 3 seconds

    // Initialize first image as active
    showImage(currentIndex);
});
// Lista obrazków tła do przełączania
// Lista obrazków tła do przełączania
// var images = [
//     'images/download.png',
//     'images/download2.png'
//   ];
  
//   var currentIndex = 0; // Indeks obecnego obrazka
  
//   // Funkcja do zmiany tła co 5 sekund
//   function zmienTlo() {
//     var header = document.getElementById('header');
//     currentIndex = (currentIndex + 1) % images.length; // Przejdź do następnego obrazka
//     header.style.backgroundImage = 'url(' + images[currentIndex] + ')';
//   }
  
//   // Uruchom funkcję na początku
//   window.addEventListener('load', function() {
//     zmienTlo(); // Uruchom na początku
//     setInterval(zmienTlo, 8000); // Następnie uruchom co 5 sekund
//   });
  
// Tekst do animacji
// Teksty do animacji
// var tekst1 = "NOWOŚĆ!";
// var tekst2 = " SPECJALIZACJA DRONY";

// // Pobierz elementy tekstowe
// var span1 = document.getElementById('animowanyTekst1');
// var span2 = document.getElementById('animowanyTekst2');

// // Funkcja do animacji pisania tekstu
// function animacjaPisania(element, tekst) {
//     span1.textContent = ''
//     span2.textContent = ''
//   var originalText = element.textContent;
//   var i = 0;
//   var interval = setInterval(function() {
//     element.textContent = originalText + tekst.substring(0, i);
//     i++;
//     if (i > tekst.length) {
//       clearInterval(interval);
//       setTimeout(function() {
//         animacjaPisania(element, tekst); // Powtórz animację po zakończeniu
//       }, 1000); // Opóźnienie przed rozpoczęciem ponownej animacji (1 sekunda)
//     }
//   }, 100); // Interwał czasowy (100ms) - można dostosować prędkość animacji tutaj
// }

// // Uruchom animację na załadowaniu strony
// window.addEventListener('load', function() {
//   animacjaPisania(span1, tekst1);
//   setTimeout(function() {
//     animacjaPisania(span2, tekst2);
//   }, 1500); // Opóźnienie animacji drugiego tekstu (1.5 sekundy)
// });
