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
function sprawdzScroll() {
    // Pobierz elementy
    const wyroznienie = document.querySelector('.wyroznienie');
    const kierunki = document.querySelector('.kierunki');
    const filmik = document.querySelector('.filmik');
    const ak = document.querySelector('.ak');
    const menu = document.querySelector('.menu');

    // Oblicz wysokości poszczególnych elementów
    const wysokoscWyroznienie = wyroznienie ? wyroznienie.offsetHeight : 0;
    const wysokoscKierunki = kierunki ? kierunki.offsetHeight : 0;
    const wysokoscFilmik = filmik ? filmik.offsetHeight : 0;
    const wysokoscAk = ak ? ak.offsetHeight : 0;
    const wysokoscMenu = menu ? menu.offsetHeight : 0;

    // Suma wysokości elementów
    const sumaWysokosci = wysokoscWyroznienie + wysokoscKierunki + wysokoscFilmik + wysokoscAk + wysokoscMenu;

    // Sprawdź aktualną pozycję przewinięcia
    const dlugoscScrolla = window.scrollY;
    let dron1 = document.getElementById('dron1');
    let dron2 = document.getElementById('dron2');

    // Porównaj pozycję scrolla z sumą wysokości
    if (dlugoscScrolla > sumaWysokosci) {
        dron1.style.transform = `translate(0,0)`;
        dron2.style.transform = `translate(0,0)`;
    } else {
        dron1.style.transform = `translate(30%, -20%)`
        dron2.style.transform = `translate(-30%, 20%)`
    }
}

// Nasłuchiwanie zdarzenia scrolla
window.addEventListener('scroll', sprawdzScroll);


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
// Pobieranie przycisku
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Funkcja pojawienia się przycisku po przewinięciu 500px
window.onscroll = function() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Funkcja powrotu na górę po kliknięciu przycisku
scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

let element = document.getElementById("poznaj")

element.addEventListener('click', ()=>{
    document.getElementById('dron1').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

button = document.getElementsByClassName("hamburger")
sidebar = document.getElementsByClassName("menu-list")

button[0].addEventListener('click', ()=>{
    button[0].classList.toggle("hamburger-active")
    sidebar[0].classList.toggle("list-active")
})

let tok = document.getElementById("tok")
let tik = document.getElementById("tik")

tok.addEventListener("mouseover", ()=>{
    tik.src = "images/tiktok2.svg"
})
tok.addEventListener("mouseleave", ()=>{
    tik.src = "images/tiktok.svg"
})
