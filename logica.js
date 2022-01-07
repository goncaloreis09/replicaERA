const navDesktop = document.getElementById('nav')
const navMobile = document.getElementById('mobile')
const itemsMenuEspecial = document.querySelectorAll(".items-menu-especial")
const body = document.getElementById("body")

//constantes da navbar mobile
const closeTrigger = document.querySelector(".closeBurger")
const openTrigger = document.querySelector(".burger")
const mobileMenu = document.querySelector(".hiding-menu")
const drpdwnTriggers = document.querySelectorAll(".dropdown-indicator")


//barra de pesquisa
const opcoes = document.querySelectorAll(".options")
const dadosPesquisa = document.querySelectorAll(".dado-pesquisa")
const localidade = document.querySelector("#dado-localidade")
const btnPesquisar = document.querySelector(".procurar-btn")

//Seletor da galeria
const seletores = document.querySelector(".seletor").children

//contador de histórico
const contadorHist = document.querySelector("#hist-counter")
const painelHist = document.querySelector(".historico-pesquisas")



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


//Loop para abrir e fechar dropdowns no menu mobile
for(let i=0; i<drpdwnTriggers.length;i++){
    drpdwnTriggers[i].addEventListener("click", () => {
        var nmr = drpdwnTriggers[i].id.split("-")
        var drpdwn = document.getElementById(nmr[1])
        drpdwn.classList.toggle("not-show")
    })
}


document.addEventListener("click", (e) => {



    //Abrir e Fechar menu mobile
    if( e.target.matches(".burger") || e.target.matches(".fa-align-left")){
        mobileMenu.classList.remove("hide")
    }else if( e.target.matches(".closeBurger") || e.target.matches(".fa-times") || !e.target.matches(".no-close")){
        mobileMenu.classList.add("hide")
    }
})


//mudar texto dos filtros da barra de pesquisa
for(let j=0; j<opcoes.length; j++){
    for(let i=0; i<opcoes[j].children[0].children.length; i++){
        opcoes[j].children[0].children[i].addEventListener("click", () =>{
            var referencia = "." + opcoes[j].id //saber qual deles mudar o nome
            var filtro = document.querySelector(referencia)
            var txt = opcoes[j].children[0].children[i].innerHTML
            filtro.innerHTML = txt
        })
    }
}


for(let i=0; i<seletores.length; i++){
    seletores[i].addEventListener("click", () =>{
        seletores[i].classList.add("active-tab")
        for(let j=0; j<seletores.length; j++){
            if(j!=i){
                seletores[j].classList.remove("active-tab")
            }
        }
    })
}


// const dadosPesquisa = document.querySelectorAll(".dado-pesquisa")
// const localidade = document.querySelector("#dado-localidade")
// const btnPesquisar = document.querySelector(".procurar-btn")

// //Guardar informação de pesquisas anteriores
// localStorage.setItem("numPesquisas", 1) //Guardar quantas pesquisas o utilizador já fez, para ajudar na nomeação
//                                         //do objeto

// btnPesquisar.addEventListener("click", (e)=>{
//     let tipoCompra = dadosPesquisa[0].innerHTML
//     let tipoImovel
//     let nQuartos
//     if(dadosPesquisa[1].innerHTML != "tipo imóvel"){
//         tipoImovel = dadosPesquisa[1].innerHTML
//     } // verificar se tem algum valor válido
//     else{
//         tipoImovel = "Indefenido"
//     }

//     if(dadosPesquisa[2].innerHTML != "quartos"){ // verificar se tem algum valor válido
//         nQuartos = dadosPesquisa[2].innerHTML
//     }else{
//         nQuartos = "Indefenido"
//     }

//     let localidadeValue = localidade.value

//     let pesquisa = {
//             tipoCompra: tipoCompra,
//             tipoImovel: tipoImovel,
//             quartos: nQuartos,
//             localidade: localidadeValue
//     }

//     let pesquisaSerialized = JSON.stringify(pesquisa)

//     let numPesquisa = localStorage.getItem("numPesquisas")
//     console.log(localStorage.getItem("numPesquisas"))
//     let nome = "pesquisa" + numPesquisa


//     localStorage.setItem(nome, pesquisaSerialized)

//     if(localStorage.getItem(nome)){ //verificar se ficou mesmo guardado
//         contadorHist.innerHTML = numPesquisa
//     }


//     for(let i=1; i<=parseInt(numPesquisa); i++){
//         let nome = "pesquisa" + numPesquisa
//         let obj = localStorage.getItem(nome)
//         if(obj){
//             let newDiv = document.createElement("div")
//             newDiv.innerHTML = `<div>
//                     <div>
//                         Tipo<i class="fas fa-euro-sign">:</i><span>${pesquisa.tipoCompra}</span>
//                     </div>
//                     <div>
//                         Imóvel<i class="fas fa-monument">:</i><span>${pesquisa.tipoImovel}</span>
//                     </div>
//                 </div>
//                 <div>
//                     <div>
//                         Quartos<i class="fas fa-home">:</i><span>${pesquisa.quartos}</span>
//                     </div>
//                     <div>
//                         Localidade<i class="fas fa-map-marker-alt">:</i><span>${pesquisa.localidade}</span>
//                     </div>
//                 </div>`

//             newDiv.classList.add("pesquisa")
//             painelHist.append(newDiv)
    
//         }
    
//     }

//     numPesquisa++
//     localStorage.setItem("numPesquisas", numPesquisa)
//     console.log(localStorage.getItem("numPesquisas"))
// })



// let num = localStorage.getItem("numPesquisas")
// num--

