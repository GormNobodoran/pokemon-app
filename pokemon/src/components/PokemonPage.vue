<template>
  <h1>¿Quién es este pokémon?</h1>

  <pokemon-picture :pokemonId="4" :showPokemon="true"/>

  <pokemon-options :pokemonOptions="pokemons"/>
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
      pokemons: [],
    };
  },
  methods: {
    async randomPokemonArray() {
      const getPokemonOptions = new GetPokemonOptions(new PokemonApiAxios());
      this.pokemons = await getPokemonOptions.getPokemonOptions();
    }
  },
  beforeMount() {
    this.randomPokemonArray();
  }
}
</script>
