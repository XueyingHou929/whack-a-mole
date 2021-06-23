const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const score = document.querySelector('.score');


function randomTime(min, max){
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes){
  const index = Math.floor(Math.random() * holes.length);
  const hole = holes[index];
  console.log(hole);
}
