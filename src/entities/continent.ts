import Country from "./country";
import { ContinentEnum } from "./continents";
export default class Continent {
    name: ContinentEnum;
    countries: Country[];

    /**
     * @param name The name of the continent
     * @param countries The countries which are part of this continent
     */
    constructor(name: ContinentEnum, countries: Country[]) {
        this.name = name;
        this.countries = countries;
    }
}