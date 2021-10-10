export default class GetPokemonOptions {
    #pokemonApi;

    constructor(pokemonApi) {
        this.#pokemonApi = pokemonApi;
    }

    #getPokemon = () => {
        const pokemonArr = Array.from(Array(650));
        return pokemonArr.map((_, index ) => index +1);
    }

    getPokemonOptions = async () => {
        const mixedPokemon = this.#getPokemon()
            .sort(() => Math.random() - 0.5);
        return await this.#getPokemonNames(mixedPokemon.slice(0,4));
    }

    #getPokemonNames = async ([a,b,c,d] = []) => {
        const promises = [
            this.#pokemonApi.getPokemon(a),
            this.#pokemonApi.getPokemon(b),
            this.#pokemonApi.getPokemon(c),
            this.#pokemonApi.getPokemon(d),
        ];
        const [pokemon1,pokemon2,pokemon3,pokemon4] = await Promise.all(promises);

        return [
            {name: pokemon1.data.name, id: pokemon1.data.id},
            {name: pokemon2.data.name, id: pokemon2.data.id},
            {name: pokemon3.data.name, id: pokemon3.data.id},
            {name: pokemon4.data.name, id: pokemon4.data.id},
        ];
    }
}
