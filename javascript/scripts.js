let url = "https://pokeapi.co/api/v2/pokemon"
let results = null;
var main = document.getElementById("main");
var party = document.getElementById("party");

function convertToJson(response) {
    if (response.ok) {
      return response.json();
    } else {
      console.log("error:", response);
    }
}

function getPokemon(tmpPokemon) {
    let newButton = document.createElement("input");
    newButton.type = "image";
    newButton.src = tmpPokemon.sprites.front_default;
    newButton.onclick = function() {
      if (this.parentElement.id == "main")
      {
        if (party.childElementCount <= 6)
        {
          main.removeChild(this);
          party.appendChild(this);
        }
        else
        {
          alert("You already have six pokemon in your party! Try removing some pokemon to make room for more.");
        }
      }
      else
      {
        party.removeChild(this);
        main.appendChild(this);
      }
    };
    main.appendChild(newButton);
  }

function forEachPokemon(pokemon, index)
{
  var newURL = pokemon.url;
  fetch(newURL).then(convertToJson).then(getPokemon);
}

function doStuff(data) {
    //console.log(data);
    var pokeList = data.results;
    //console.log(pokeList);
    pokeList.forEach(forEachPokemon);
  }

fetch(url).then(convertToJson).then(doStuff);

//console.log(pokeListFull);



