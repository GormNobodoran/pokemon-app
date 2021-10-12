import GetPokemonOptions from '@/application/GetPokemonOptions';
import PokemonApi from '@/domain/PokemonApi';

const mockGetPokemonFn = jest.fn().mockImplementation((id) =>({
   data: {
      id,
      name: `pokemon${id}`
   }
}));
jest.mock('../../../src/domain/PokemonApi', () => {
   return jest.fn().mockImplementation(() => {
      return {getPokemon: mockGetPokemonFn}
   });
});

let getPokemonOptions;
describe('GetPokemonOptions', () => {
   beforeEach(() => {
      PokemonApi.mockClear();
      mockGetPokemonFn.mockClear();
      getPokemonOptions = new GetPokemonOptions(new PokemonApi());
   });
   it('Should return a mixed array with pokemon names', async() => {
      const pokemons = await getPokemonOptions.getPokemonOptions();

      expect(mockGetPokemonFn).toHaveBeenCalledTimes(4);
      expect(pokemons.length).toBe(4);
      expect(pokemons[0].hasOwnProperty('id')).toBeTruthy();
      expect(pokemons[0].hasOwnProperty('name')).toBeTruthy();
      expect(pokemons[0]).toEqual({
         name: expect.any(String),
         id: expect.any(Number),
      });
   });
});