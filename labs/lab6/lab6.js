
const pokemon1 = document.querySelector('.pokemon1');
const pokemon2 = document.querySelector('.pokemon2');

const sableye = [
  'https://img.pokemondb.net/sprites/black-white/anim/shiny/sableye.gif',
  'https://img.pokemondb.net/sprites/black-white/anim/back-normal/sableye.gif'
];

const drapion = [
  'https://img.pokemondb.net/sprites/black-white/anim/normal/drapion.gif',
  'https://img.pokemondb.net/sprites/black-white/anim/back-shiny/drapion.gif'
];

let currentPokemon = 'sableye';

function changePokemon() {
  if (currentPokemon === 'sableye') {
    pokemon1.style.left = '-150px';
    pokemon2.style.right = '-150px';
    setTimeout(() => {
      pokemon1.children[0].src = drapion[0];
      pokemon2.children[0].src = drapion[1];
      pokemon1.style.left = '50%';
      pokemon2.style.right = '50%';
      currentPokemon = 'drapion';
      triggerShineAnimation();
    }, 1000);
  } else {
    pokemon1.style.left = '150px';
    pokemon2.style.right = '150px';
    setTimeout(() => {
      pokemon1.children[0].src = sableye[0];
      pokemon2.children[0].src = sableye[1];
      pokemon1.style.left = '50%';
      pokemon2.style.right = '50%';
      currentPokemon = 'sableye';
      triggerShineAnimation();
    }, 1000);
  }
}
const shines = document.querySelectorAll('.shine');
shines.forEach((shine) => {
  shine.style.opacity = '0.6';
  setTimeout(() => {
    shine.style.opacity = '0';
  }, 500);
});

document.getElementById('startAnimation').addEventListener('click', () => {
    setInterval(changePokemon, 3000);
  });
  
  function triggerShineAnimation() {
    const shines = document.querySelectorAll('.shine');
    shines.forEach((shine) => {
      shine.style.opacity = '0.6';
      setTimeout(() => {
        shine.style.opacity = '0';
      }, 500);
    });
  }
