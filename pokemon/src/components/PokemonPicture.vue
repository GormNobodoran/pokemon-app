<template>
  <div class="pokemon-container">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
         class="hidden-pokemon"
         alt="pokémon">

    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
         class="fade-in"
         alt="pokémon">
  </div>
</template>

<script>
export default {
  name: "PokemonPicture.vue"
}
</script>

<style scoped>
  .pokemon-container {
    height: 200px;
  }
  img {
    height: 200px;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
  }
  .hidden-pokemon {
    filter: brightness(0);
  }
  .hidden-pokemon {
    filter: brightness(0);
  }
</style>