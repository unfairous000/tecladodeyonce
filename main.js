function tocarSomPom (){
    document.querySelector('#som_tecla_pom').play();
    document.querySelector('.tecla_pom').onclick = tocarSomPom;
}

function tocarSomclap (){
    document.querySelector('#som_tecla_clap').play();
    document.querySelector('.tecla_clap').onclick = tocarSomclap;
}

function tocarSomtim (){
    document.querySelector('#som_tecla_tim').play();
    document.querySelector('.tecla_tim').onclick = tocarSomtim;
}

function tocarSompuff (){
    document.querySelector('#som_tecla_puff').play();
    document.querySelector('.tecla_puff').onclick = tocarSompuff;
}

function tocarSomsplash (){
    document.querySelector('#som_tecla_splash').play();
    document.querySelector('.tecla_splash').onclick = tocarSomsplash;
}

function tocarSomtaim (){
    document.querySelector('#som_tecla_taim').play();
    document.querySelector('.tecla_taim').onclick = tocarSomtaim;
}

function tocarSompsh (){
    document.querySelector('#som_tecla_psh').play();
    document.querySelector('.tecla_psh').onclick = tocarSomPsh;
}

function tocarSomtic (){
    document.querySelector('#som_tecla_tic').play();
    document.querySelector('.tecla_tic').onclick = tocarSomtic;
}

function tocarSomtam (){
    document.querySelector('#som_tecla_tam').play();
    document.querySelector('.tecla_tam').onclick = tocarSomtam;
}

function tocarSom (idElementoAudio){
    document.querySelector (idElementoAudio).play();
}

document.querySelectorAll('.tecla'); //a funçao determina a generalização das classes que contém o nome escrito tecla

const ListaDeTeclas = document.querySelectorAll('.tecla');

ListaDeTeclas [0].onclick = tocarSomPom;
ListaDeTeclas [1].onclick = tocarSomclap;
ListaDeTeclas [2].onclick = tocarSomtim;
ListaDeTeclas [3].onclick = tocarSompuff;
ListaDeTeclas [4].onclick = tocarSomsplash;
ListaDeTeclas [5].onclick = tocarSomtaim;
ListaDeTeclas [6].onclick = tocarSomPsh;
ListaDeTeclas [7].onclick = tocarSomtic;
ListaDeTeclas [8].onclick = tocarSotam;

let contador = 0;

//ADICIONANDO A CONDICIONAL WHILE 
while (contador <ListaDeTeclas.length) {

// listaDeTeclas [contador].onclick= tocarSom;
//contador = contador + 1;
//console.log (contador);

const tecla = ListaDeTeclas [contador];
const instrumento = tecla.classList [1];

const idAudio = `#som_${instrumento}`;

tecla.onclick = function () { 
    tocarSom (idAudio);

} 
contador = contador + 1;
}