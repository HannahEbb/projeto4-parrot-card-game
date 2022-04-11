// DECLARAÇÃO DE VARIÁVEIS GLOBAIS
let numerocartas;
let numeropares;
let arraycartas = [];
let arraytodascartas = [document.querySelector(".carta01"), document.querySelector(".carta02"), document.querySelector(".carta03"), document.querySelector(".carta04"), document.querySelector(".carta05"), document.querySelector(".carta06"), document.querySelector(".carta07"), document.querySelector(".carta08"), document.querySelector(".carta09"), document.querySelector(".carta10"), document.querySelector(".carta11"), document.querySelector(".carta12"), document.querySelector(".carta13"), document.querySelector(".carta14")];
let cartas;

quantasCartas();


// "Esta função pode ficar separada do código acima, onde você preferir"
function comparador() { 
	return Math.random() - 0.5; 
}

// FUNÇÃO PARA EXIBIR AS CARTAS NO DISPLAY DE ACORDO COM PROMPT
function quantasCartas () {
    numerocartas = prompt("Quantas cartas?");
    numeropares = Math.floor(numerocartas/2);

for (let i = 0; i <= numerocartas-1; i++) {
arraycartas.push(arraytodascartas[i]); 

}

arraycartas = arraycartas.sort(comparador);

}

//EXIBIR O ARRAYCARTAS NA ORDEM EMBARALHADA DO ARRAY -- ver aulas de quarta, quinta e sexta
function exibeCartas(arraycartas) {
  cartas = document.querySelector(".cartas");

  for (let j = 0; j <= (arraycartas.length - 1); j++) {
   cartas.innerHTML += arraycartas[j]; 
   arraycartas[j].classList.remove("escondido");

  }


  //for (let j = 0; j <= (arraycartas.length - 1); j++) {
  //arraycartas[j].classList.remove("escondido");
  //arraycartas[j].classList.add("carta-verso");

  //return arraytodascartas;
}

}
