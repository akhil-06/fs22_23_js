
let container = document.getElementById("pokemon_card_container");
let searchInput = document.getElementById("search");
let filterBtn = document.getElementById("filter");

function createCard(pokemon) {
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <div class='card-inner'>
    <div class='card-front'>
    <div class='id'>${pokemon.id}</div>
    <img src='${pokemon.sprites.front_default}'>
    <div class='name'>${pokemon.name}</div>
    <div class='type'>${pokemon.types[0].type.name}</div>
    </div>

    <div class='back-card'>
    <img src='${pokemon.sprites.back_default}'>
     <div class='name'>${pokemon.name}</div>
     <div class='name'>${pokemon.abilities[0].ability.name}</div>
    </div>
    </div>
    `;
    console.log(card)
    return card;
}

filterBtn.addEventListener('click', function(){
    let allCards = document.querySelectorAll(".card");
    allCards.forEach(function(card){
        let cardType = card.querySelector(".type").textContent;

        if(cardType === type.value){
             card.style.display = "block"
        }else{
             card.style.display = "none"
        }
    })
})

searchInput.addEventListener('keyup', function(){
    let searchValue = searchInput.value.toLowerCase();
    // searchValue.tolowerCase();

    // console.log(searchValue);
    let allCards = document.querySelectorAll(".card");
    // console.log(allCards);
    allCards.forEach(function(card){
        let cradName = card.querySelector(".name").textContent;
        // console.log(cradName);
        if(cradName.startsWith(searchValue)){
            card.style.display = "block"
        }else{
            card.style.display = "none"
        }
    })   
})

async function fetchPokemondata(i) {
//   console.log(i);
  let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
  let result = await data.json();
  return result;
}

async function fetchPokemon() {
  for (let i = 1; i <= 100; i++) {
    let pokemon = await fetchPokemondata(i);
    // console.log(pokemon);
    let pokemonCard = createCard(pokemon);
    container.appendChild(pokemonCard);
  }
}

fetchPokemon();
