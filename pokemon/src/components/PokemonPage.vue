<template>
  <h1>¿Quién es este pokémon?</h1>

  <pokemon-picture/>

  <pokemon-options/>
</template>

<script>
import PokemonPicture from './PokemonPicture';
import PokemonOptions from './PokemonOptions';

export default {
  name: "PokemonPage.vue",
  components: {
    PokemonPicture,
    PokemonOptions,
  }
}
</script>
