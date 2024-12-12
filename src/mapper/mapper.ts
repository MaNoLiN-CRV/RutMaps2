import Country from "../entities/country";
import { CountryResponse } from "../entities/responses/countryResponse";


/**
 * Maps an array of CountryResponse objects to an array of Country objects.
 * @param {CountryResponse[]} countries - The array of CountryResponse objects to map.
 * @returns {Country[]} A Country array with the same length as the input array.
 */
const mapCountries = (countries: CountryResponse[]): Country[] => {
  return countries.map((country: CountryResponse): Country => ({
    name: country.name.common,
    capital: country?.capital?.[0] ?? 'unknown',
    language: country?.languages?.[Object.keys(country.languages)[0]] ?? 'unknown',
    flag: country.flags.png,
    coords: {
      lat: country.latlng[0],
      lng: country.latlng[1],
    },
    region: country.region.toString(),
    map: country.maps.openStreetMaps
  }));
}

export default mapCountries;

    
