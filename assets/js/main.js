// const offset = 0;
// const limit = 10;
// const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

// function convertPokemonTypesToLi(pokemonTypes){
//     return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`) 
// }
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 10
let offset = 0
const maxRecords = 151


const pokemonList = document.getElementById('pokemonList')



    // pokeApi.getPokemons()
    // .then((pokemons = []) => {
        
        
    //     const newList = pokemons.map(convertPokemonToLi).join('')
    //     pokemonList.innerHTML += newList       
    //     // console.log(pokemonList)
    //     // const listItems = []
    //     // for (let i = 0; i < pokemons.length; i++) {
    //     //     const pokemon = pokemons[i];
    //     //     console.log(convertPokemonToLi(pokemon));
    //     //     listItems.push(convertPokemonToLi(pokemon))
    //     // }
    //     // pokemonList.innerHTML += convertPokemonToLi(pokemon);
    //     // console.log(listItems)
    // })
    // .catch((error) => console.error(error))
    // .finally(function(){
    //     //o finally sempre é acionado, independente de erro ou não
    //     console.log('Requisição concluída')
    // })

function loadPokemonItens(offset, limit){
    
    // function convertPokemonToLi(pokemon){
    //     return `<li class="pokemon ${pokemon.type}">
    //     <span class="number">#${pokemon.number}</span>
    //     <span class="name">${pokemon.name}</span>
    
    //     <div class="detail">
    //         <ol class="types">
    //             ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
    //         </ol>
    
    //         <img src="${pokemon.photo}" alt="${pokemon.name}" srcset="">
    //     </div>
    // </li>`
    // }; 
    pokeApi.getPokemons(offset, limit)
    .then((pokemons = []) => {
        const newList = pokemons.map((pokemon) => `
        <a href="details.html?${pokemon.number}"> <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
        
             <div class="detail">
                 <ol class="types">
                   ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                 </ol>
        
                 <img src="${pokemon.photo}" alt="${pokemon.name}" srcset="">
             </div>
         </li></a>`).join('')
        pokemonList.innerHTML += newList
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () =>{
    offset += limit
    const qtdRecordNexPage = offset + limit

    if(qtdRecordNexPage >= maxRecords){
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)
        
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }else{
        loadPokemonItens(offset, limit)
    }

    
})

