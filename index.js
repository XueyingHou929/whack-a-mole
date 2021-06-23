const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const score = document.querySelector('.score');
let lastHole;

function randomTime(min, max){
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes){
  const index = Math.floor(Math.random() * holes.length);
  const hole = holes[index];
  if(hole === lastHole){
    console.log('Ah-ah');
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function peep(){
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add('up');
}
