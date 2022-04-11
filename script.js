// DECLARAÇÃO DE VARIÁVEIS GLOBAIS
let numerocartas;
let numeropares;
let arraycartas = [];
let cartas;


// ARRAY QUE CONTÉM AS IMAGENS DOS 7 MODELOS DE CARTA

const imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src = "/media/bem-te-vi.jpeg";

imgArray[1] = new Image();
imgArray[1].src = '/media/bem-te-vi.jpeg';

imgArray[2] = new Image();
imgArray[2].src = '/media/bem-te-vi.jpeg';

imgArray[3] = new Image();
imgArray[3].src = '/media/bem-te-vi.jpeg';

imgArray[4] = new Image();
imgArray[4].src = '/media/bem-te-vi.jpeg';

imgArray[5] = new Image();
imgArray[5].src = '/media/bem-te-vi.jpeg';

imgArray[6] = new Image();
imgArray[6].src = '/media/bem-te-vi.jpeg';

// "Esta função pode ficar separada do código acima, onde você preferir"
function comparador() { 
	return Math.random() - 0.5; 
}


quantasCartas ()

 
// FUNÇÃO PARA EXIBIR AS CARTAS NO DISPLAY DE ACORDO COM PROMPT
function quantasCartas () {
    numerocartas = prompt("Quantas cartas?");
    numeropares = Math.floor(numerocartas/2);

    for (let i = 0; i <= numeropares-1; i++) {
    arraycartas.push(imgArray[i], imgArray[i]);
    arraycartas = arraycartas.sort(comparador);
    }

//INSERE CARTAS NO INNERHTML DA DIV "CARTAS"
cartas = document.querySelector(".cartas");

for (let j = 0; j <= numerocartas-1; j++) {
  cartas.innerHTML += `<div> <img src ="${arraycartas[j]}"> </div>`

}

}


