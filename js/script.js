const pokemonName = document.querySelector('.pokemon-name');
const pokemonNumber = document.querySelector('.pokemon-number');
const pokemonImg = document.querySelector('.pokemon-img');

async function fetchPokemon(pokemon) {
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  const data = await APIResponse.json();

  return data;
}

async function renderPokemon(pokemon) {
  const data = await fetchPokemon(pokemon);

  pokemonName.innerHTML = data.name;
  pokemonNumber.innerHTML = data.id;
  pokemonImg.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];

}

renderPokemon(2);