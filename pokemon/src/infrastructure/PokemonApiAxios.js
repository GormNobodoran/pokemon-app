import axios from 'axios';
import PokemonApi from '@/domain/PokemonApi';

export default class PokemonApiAxios extends PokemonApi{
   #axios;
   baseUrl;

   constructor() {
       super();
       this.baseUrl = 'https://pokeapi.co/api/v2/pokemon'
       this.#axios = axios.create({
           baseURL: this.baseUrl,
           method: 'get',
       });
   }

   getPokemon(id) {
       return this.#axios.get(`/${id}`);
   }
}
