// CARDS ARTISTAS
const cardArtista = document.querySelectorAll('.cardsArtistas');
const fotoCard = document.querySelectorAll('.info img');
const tituloCard = document.querySelectorAll('.info h1');


if (matchMedia('only screen and (max-width: 700px)').matches) {
    tituloCard.forEach((item) => {
        item.classList.add('infoH1Hover');
    });

    fotoCard.forEach((item) => {
        item.classList.add('infoH1Hover');
    });
} else {
    function hoverCardAdd(index) {
        tituloCard[index].classList.add('infoH1Hover');
        fotoCard[index].classList.add('infoH1Hover');
    }

    cardArtista.forEach((item, index) => {
        item.addEventListener('mouseover', () => {
            hoverCardAdd(index);
        })
    })

    function hoverCardRemove(index) {
        tituloCard[index].classList.remove('infoH1Hover');
        fotoCard[index].classList.remove('infoH1Hover');
    }

    cardArtista.forEach((item, index) => {
        item.addEventListener('mouseleave', () => {
            hoverCardRemove(index);
        })
    })
}


// GALERIA DE IMAGENS
const foto = document.querySelectorAll('.foto img');
const btnFechar = document.querySelector('.fechar');
const lightBox = document.querySelector('.lightBoxClose');
const fotoGrande = document.querySelector('.fotoGrande');


function popUpFoto(index) {

    lightBox.classList.remove('lightBoxClose');
    lightBox.classList.add('lightBox');
    imagem = foto[index].getAttribute('src');
    fotoGrande.setAttribute('src', imagem);
}

// TECLA ESC
function sair(event) {
    if (event.key == 'escape') {
        lightBox.classList.remove('lightBox');
    }
    lightBox.classList.add('lightBoxClose');
}

// BOTÃO FECHAR
function fechaPopUp() {
    lightBox.classList.remove('lightBox')
    lightBox.classList.add('lightBoxClose');
}

// EVENTOS
foto.forEach((item, index) => {
    item.addEventListener('click', () => {
        popUpFoto(index);
    })
})

btnFechar.addEventListener('click', fechaPopUp)
lightBox.addEventListener('click', fechaPopUp)

window.addEventListener('keydown', sair)

// SCROLL SUAVE

const links = document.querySelectorAll('a[href^="#"]');

function softScroll(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const sessao = document.querySelector(href);
    const topoSessao = sessao.offsetTop - 260;

    window.scrollTo({
        top: topoSessao,
        behavior: "smooth",
    })
}

links.forEach((itens) => {
    itens.addEventListener('click', softScroll)
});

// MENU MOBILE
const menuMobile = document.querySelector('.menuMobile');
const btnMenu = document.querySelector('.icone_menu_mobile');
const fecharMobile = document.querySelector('.menuMobile .fechar')

function abreMenu(){
    menuMobile.classList.toggle('abreMenu');
}

function fechaMenu(){
    menuMobile.classList.remove('abreMenu');
}

btnMenu.addEventListener('click', abreMenu);
fecharMobile.addEventListener('click', fechaMenu);
menuMobile.addEventListener('click', fechaMenu);


// FOTOS MAPA
const pins = document.querySelectorAll('.mapa img');
const fotos = [
    'img/arte_pin_elvis.jpg',
    'img/arte_pin_tarik.jpg',
    'img/arte_pin_shn.jpg',
    'img/arte_pin_enivo.jpg',
    'img/arte_pin_binho.jpg',]

function popUpMapa(index){
    // event.preventDefault();
    lightBox.classList.remove('lightBoxClose');
    lightBox.classList.add('lightBox');
    fotoGrande.setAttribute('src', fotos[index] )
}


pins.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        popUpMapa(index)
    })
})

// PIN
const textoPin = document.querySelectorAll('.mapa li p');
const imgPin = document.querySelectorAll('.mapa li img');


if (matchMedia('only screen and (max-width: 700px)').matches) {
    textoPin.forEach((item) => {
        item.classList.remove('pin');
        item.classList.add('pinHoverMobile');
    });

} else {


    function pinText(index){
        textoPin[index].classList.toggle('pin')
        textoPin[index].classList.toggle('pinHover')
    }
    
    // function pinTextClose(index){
    //     textoPin[index].classList.remove('pinHover')
    //     textoPin[index].classList.add('pin')
    // }

    imgPin.forEach((item, index)=>{
        item.addEventListener('mouseover', ()=>{
            pinText(index)
        })
    })
    
    imgPin.forEach((item, index)=>{
        item.addEventListener('mouseleave', ()=>{
            pinText(index)
        })
    })
}