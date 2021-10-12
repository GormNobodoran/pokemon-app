import PokemonApiAxios from '@/infrastructure/PokemonApiAxios';
describe('pokemonApiAxios', () => {
    it('axios should have the right base url', () =>{
        const pokemonApi = new PokemonApiAxios();
        expect(pokemonApi.baseUrl).toBe('https://pokeapi.co/api/v2/pokemon');
    });
});
