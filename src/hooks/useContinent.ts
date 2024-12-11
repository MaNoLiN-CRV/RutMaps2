import Continent from "../entities/continent";
import { AppRootState } from "../context/store/store";
import { useGetCountriesQuery } from "../api/api";
import { ContinentEnum } from "../entities/continents";

export const useContinents = (): Continent[] => {
    const countries = useGetCountriesQuery((state: AppRootState) => state.map.countries);
    const continents: Continent[] = [];

    Object.values(ContinentEnum).forEach((value) => {
        const countriesInContinent = countries.data?.filter((country) => country.continents.includes(value));
        if (countriesInContinent) {
            continents.push(new Continent(value, countriesInContinent));
        }
    });

    return continents;
};
