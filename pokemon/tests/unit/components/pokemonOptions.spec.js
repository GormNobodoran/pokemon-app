import {shallowMount} from '@vue/test-utils';
import PokemonOptions from '@/components/PokemonOptions';
import {pokemonsMock} from '../mocks/pokemons.mock';

describe('PokemonOptions', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(PokemonOptions, {
            props: {
                pokemonOptions: pokemonsMock
            }
        });
    });
    it('should match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('should show the for options correctly', () => {
        const liTags = wrapper.findAll('li');
        expect(liTags.length).toBe(4);
        liTags.forEach((li, index) => {
            expect(li.text()).toBe(pokemonsMock[index].name);
        });
    });

    it('should emit "selection" with their respective parameters on click', () => {
        const liTags = wrapper.findAll('li');
        liTags.forEach((li, index) => {
            li.trigger('click');
            expect(wrapper.emitted('selection')[index]).toEqual([pokemonsMock[index].id]);
        });
    });
});
