import Country from "./country";

export default class Continent {
    name: string;
    countries: Country[];

    /**
     * @param name The name of the continent
     * @param countries The countries which are part of this continent
     */
    constructor(name: string, countries: Country[]) {
        this.name = name;
        this.countries = countries;
    }
}