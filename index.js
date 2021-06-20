const searchBtn = document.getElementById('search-btn'); // search button
const inputField = document.getElementById('name-input'); // search field input
const nameScreen = document.getElementById('name-screen'); // name-screen
const imageScreen = document.getElementById('main-screen'); // image screen


const getPokemonData = (pokemon) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then((data) => {
      let id = ('00' + data.id).slice(-3);
      imageScreen.style.backgroundImage = `url('https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png')`;
      nameScreen.innerHTML = data.name;
      inputField.value = '';
    });
};


inputField.addEventListener(
  'keydown',
  (event) => event.key === 'Enter' && searchBtn.click()
);
searchBtn.addEventListener('click', () => getPokemonData(inputField.value));
