import {shallowMount, mount} from '@vue/test-utils';
import PokemonPage from '@/components/PokemonPage';
import {pokemonsMock} from '../mocks/pokemons.mock';
import PokemonPicture from '../../../src/components/PokemonPicture';
import PokemonOptions from '../../../src/components/PokemonOptions';

describe('PokemonPage', () => {
    let wrapper;
    beforeEach(() =>{
        wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemon: pokemonsMock[0],
                    pokemons: pokemonsMock,
                    showPokemon: false,
                    showAnswer: false,
                    message: '',
                }
            }
        });
    }) ;

    it('should call randomPokemonArray on mount', () => {
        const randomPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'randomPokemonArray');
        const wrapper = shallowMount(PokemonPage);
        expect(randomPokemonArraySpy).toHaveBeenCalled();
    });

    it('should match snapshot after pokemons load', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('should show components of PokemonPicture and PokemonOptions', () => {
        const pokemonPicture = wrapper.findComponent(PokemonPicture);
        const pokemonOptions = wrapper.findComponent(PokemonOptions);

        expect(pokemonPicture.exists()).toBeTruthy();
        expect(pokemonOptions.exists()).toBeTruthy();
        expect(pokemonPicture.attributes('pokemonid')).toBe(String(pokemonsMock[0].id));
        expect(pokemonOptions.attributes('pokemonoptions')).toBeTruthy();

    });

    it('should change component status on checkAnswer', async() => {
        const pokemonId = pokemonsMock[0].id
        await wrapper.vm.checkAnswer(pokemonId);

        expect(wrapper.find('h2').exists()).toBeTruthy();
        expect(wrapper.vm.showPokemon).toBeTruthy();
        expect(wrapper.find('h2').text()).toBe(`Acertaste, es ${pokemonsMock[0].name}`)
    });

    it('should show failure message when wrong pokemon is selected', async() => {
        const wrongPokemonId = pokemonsMock[1].id
        await wrapper.vm.checkAnswer(wrongPokemonId);

        expect(wrapper.find('h2').exists()).toBeTruthy();
        expect(wrapper.vm.showPokemon).toBeTruthy();
        expect(wrapper.vm.$data.message).toBe(`Error, es ${pokemonsMock[0].name}`)
    });
})