import Coords from "./coords";

export default class Country {
    name: string;
    capital: string;
    language: string;
    flag: string;   
    coords: Coords;

    /**
     * Create a new Country object
     * @param {string} name - The country name
     * @param {string} capital - The capital of the country
     * @param {string} language - The language spoken in the country
     * @param {string} flag - The flag of the country
     */
    constructor(name: string, capital: string, language: string, flag: string , coords: Coords) {
        this.name = name;
        this.capital = capital;
        this.language = language;
        this.flag = flag;
        this.coords = coords;
    }
}