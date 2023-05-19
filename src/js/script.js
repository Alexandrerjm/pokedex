const listaPokemons = document.querySelectorAll('.pokemon');
const pokemonCard = document.querySelectorAll('.card-pokemon');

listaPokemons.forEach((pokemon) =>{
    pokemon.addEventListener('click', () =>{
        
        const pokemonSelecionado = document.querySelector('.pokemon-selecionado');
        pokemonSelecionado.classList.remove('pokemon-selecionado');
        
        const idPokemonSelecionado = pokemon.attributes.id.value;

        const idDoCardSelecionado = `card-${idPokemonSelecionado}`;
        const cardPokemonParaAbrir = document.getElementById(idDoCardSelecionado);
        cardPokemonParaAbrir.classList.add('pokemon-selecionado');

        const pokemonAtivo = document.querySelector('.ativo');
        pokemonAtivo.classList.remove('ativo');

        const cardPokemonAtivo = document.getElementById(idPokemonSelecionado);
        cardPokemonAtivo.classList.add('ativo');
        
    })
})