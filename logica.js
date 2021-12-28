const navDesktop = document.getElementById('nav')
const navMobile = document.getElementById('mobile')
const itemsMenuEspecial = document.querySelectorAll(".items-menu-especial")

//Variável que guarda a posição inicial do scroll para puder saber quando o utilizador está a dar scroll para cima ou para baixo
var posicaoScroll = window.scrollY

window.addEventListener('scroll', ()=>{
    //Quando o utilizador dá scroll ele guarda a posição desse novo scroll numa outra variavel
    var posicaoScrollNova = window.scrollY

    //Compara a posicao do scroll inicial e a nova e a partir daí comparara-as e decide se está a dar scroll para cima ou baixo.
    if(posicaoScroll <= posicaoScrollNova){ //Scroll para baixo
        navDesktop.style.top = "-100px"
        navMobile.style.top="-100px"
    }else{//Scroll para cima
        navDesktop.style.top = "0px"
        navMobile.style.top = "0px"

        if(window.scrollY >= 10){
            navDesktop.classList.add('background-white')
            navDesktop.classList.remove('background-transparente')
            navMobile.classList.add('background-white')
            navMobile.classList.remove('background-transparente')
        }else{
            navDesktop.classList.remove('background-white')
            navDesktop.classList.add('background-transparente')
            navMobile.classList.remove('background-white')
            navMobile.classList.add('background-transparente')
        }
    }

    posicaoScroll = posicaoScrollNova
})