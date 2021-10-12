<template>
  <h1>¿Quién es este pokémon?</h1>
  <h1 v-if="!pokemon">Cargando...</h1>
  <div v-else>
    <pokemon-picture  :pokemonId="pokemon.id" :showPokemon="showPokemon"/>

    <pokemon-options
        :pokemonOptions="pokemons"
        @selection="checkAnswer"
    />

    <template v-if="showAnswer">
      <h2>{{ message }}</h2>

      <button @click="newGame">
        Nuevo juego
      </button>
    </template>
  </div>
</template>

<script>
import PokemonPicture from './PokemonPicture';
import PokemonOptions from './PokemonOptions';
import GetPokemonOptions from '../application/GetPokemonOptions';
import PokemonApiAxios from '../infrastructure/PokemonApiAxios';

export default {
  name: "PokemonPage.vue",
  components: {
    PokemonPicture,
    PokemonOptions,
    GetPokemonOptions,
  },
  data() {
    return {
      pokemon: null,
      pokemons: [],
      showPokemon: false,
      showAnswer: false,
      message: '',
    };
  },
  methods: {
    async randomPokemonArray() {
      const getPokemonOptions = new GetPokemonOptions(new PokemonApiAxios());
      this.pokemons = await getPokemonOptions.getPokemonOptions();

      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemons[rndInt];
    },
    checkAnswer(pokemonId) {
      if(pokemonId === this.pokemon.id) {
        this.message = `Acertaste, es ${this.pokemon.name}`;
      } else {
        this.message = `Error, es ${this.pokemon.name}`;
      }
      this.showPokemon = this.showAnswer = true;
    },
    newGame() {
      this.showAnswer = this.showPokemon = false;
      this.pokemons = [];
      this.pokemon = null;
      this.randomPokemonArray();
    }
  },
  beforeMount() {
    this.randomPokemonArray();
  }
}
</script>
