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

function losoweStyle() {
    const elementy = document.querySelectorAll('.moveLi');
    kolory = ["#EEEEEE", "#b3ff01", "#2196F3"];
    
    elementy.forEach(element => {
        const kolorTekstu = `${kolory[Math.floor(Math.random() * 3)]}`;
        element.style.color = kolorTekstu;
        element.style.background = "transparent"
    });

    for(let i=0;i<5;i++){
        elementy[Math.floor(Math.random() * elementy.length)].style.background = '#b3b3b32a'
    }
}

losoweStyle();
setInterval(losoweStyle, 3000); // Wywołanie funkcji co 3 sekundy

let element = document.getElementById("poznaj")

element.addEventListener('click', ()=>{
    document.getElementById('kierunki').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });