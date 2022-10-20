/*

1)  L’utente clicca su un bottone che genererà una griglia di gioco quadrata.

2)  Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.

3)  Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

*/

// Creo un bottone che poi darà inizio al gioco
const container = document.querySelector('.container');
const start = document.querySelector('.start');
const boxForRow = 10;

// devo utilizzare una funzione che andrà a creare i box
start.addEventListener('click', function(){
  container.innerHTML = '';
  total(boxForRow);
})
console.log('qui 1');


total(boxForRow); 
function total (numberEl){
  const totalBox = Math.pow(numberEl, 2);
  for(let i = 0; i < totalBox; i++){
    boxCreate(i + 1);
  }
}
console.log('qui 2');

function boxCreate(val){
  const box = document.createElement('div');
  box.className = 'box-style';
  box.innerText = val;
  box.idElement = val + 1;
  box.addEventListener('click', clickBox)
  container.append(box);
}
console.log('qui 3');
// al click sul box recupero l'id/info dello stesso e la stampo a console

function clickBox(){
  console.log(this.idElement);
  this.innerHTML = this.idElement;
  this.classList.add('lux');
}
console.log('qui 4');