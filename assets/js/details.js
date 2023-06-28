const Detail = document.getElementById('detail')
const parametrosURL = new URLSearchParams(window.location.search);
const nomeParametro = parametrosURL.keys().next().value;
console.log(nomeParametro); // Nome do parâmetro



const url = `https://pokeapi.co/api/v2/pokemon/${nomeParametro}`
function convertTypes(pokemonTypes){
    return pokemonTypes.map((typeSlot = []) => `<p class="type ${typeSlot.type.name}">${typeSlot.type.name}</p>`)
}
function convertOnlyTypes(pokemonTypes){
    return pokemonTypes.map((typeSlot = []) => typeSlot.type.name)
}
function convertMoves(moves){
    return moves.map((moveSlot = []) => moveSlot.move.name)
}
function convertStats(stats){
    return stats.map((statsSlot = []) => statsSlot.base_stat)
}


fetch(url).then((response) => response.json())
.then((pokemon) => {

    const mainType = convertOnlyTypes(pokemon.types)
    console.log(mainType[0])
    const listaStats = convertStats(pokemon.stats)
    const listaMoves = convertMoves(pokemon.moves)
    const Moves = listaMoves.slice(0, 5);
    console.log(pokemon)
    Detail.innerHTML = `
    <div class="${mainType[0]}">
        <div class="header"><img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
        <p>#${pokemon.id}</p></div>
        <h1 class="pokeName">${pokemon.name}</h1>
        <div class="mainTypes">
            <h2>Types</h2>
                <div class="types">
                    ${convertTypes(pokemon.types).join('')}
                </div>
        </div>
        <h3>Moves:</h3>
        <p class="moves">${Moves.join(", ")}</p>
        
        <h4>Status:</h4>
        
        <div class="status">
            <p class="statusChildren">HP: <span class="hp">${listaStats[0]}</span></p>
            <p class="statusChildren">Attack: <span class="att">${listaStats[1]}</span></p>
            <p class="statusChildren">Defense: <span class="def">${listaStats[2]}</span></p>
            <p class="statusChildren">Velocity: <span class="vel">${listaStats[5]}</span></p>
        </div>
    </div>
    `
})
console.log(moves)

