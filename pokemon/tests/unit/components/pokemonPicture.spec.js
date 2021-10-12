import {shallowMount} from '@vue/test-utils';
import PokemonPicture from '@/components/PokemonPicture';

const imageSrc = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/';
const imageExtension = '.svg';
describe('PokemonPicture', () => {
   it('Should match the snapshot', () => {
       const wrapper = shallowMount(PokemonPicture, {
           props: {
               pokemonId: 1,
               showPokemon: false,
           }
       });
       expect(wrapper.html()).toMatchSnapshot();
   });

   it('Should show hidden image and pokemon 100', () => {
       let pokemonNumber = 100;
       const wrapper = shallowMount(PokemonPicture, {
           props: {
               pokemonId: pokemonNumber,
               showPokemon: false,
           }
       });
       const hiddenPokemon = wrapper.find(".hidden-pokemon");
       const pokemon = wrapper.find(".fade-in");
       expect(hiddenPokemon.exists()).toBeTruthy();
       expect(pokemon.exists()).toBeFalsy();
       expect(hiddenPokemon.attributes().src).toBe(`${imageSrc}${pokemonNumber}${imageExtension}`)
   });

   it('Should show pokemon image when showPokemon:true', () => {
       let pokemonNumber = 100;
       const wrapper = shallowMount(PokemonPicture, {
           props: {
               pokemonId: pokemonNumber,
               showPokemon: true,
           }
       });
       const hiddenPokemon = wrapper.find(".hidden-pokemon");
       const pokemon = wrapper.find(".fade-in");
       expect(pokemon.exists()).toBeTruthy();
       expect(hiddenPokemon.exists()).toBeFalsy();
       expect(pokemon.attributes().src).toBe(`${imageSrc}${pokemonNumber}${imageExtension}`)
   });
});