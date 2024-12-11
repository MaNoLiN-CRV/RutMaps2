import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Continents } from "../entities/continents"
import Country from "../entities/country";
import {CountryResponse } from "../entities/responses/countryResponse";
export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://restcountries.com/v3.1",
    
    }),
    
    endpoints: (builder) => ({
        getCountries: builder.query({
            query: () => "/all",
            transformResponse: (response: any) => {
                return response.map((country: CountryResponse) => {
                    return {
                        name: country.name.common,
                        capital: country.capital,
                        language:  country.languages?.[Object.keys(country.languages)[0]],
                        flag: country.flags.png,
                        coords: {
                            lat: country.latlng[0],
                            lng: country.latlng[1]
                        }
                    };
                }) as Country[];
            } 
        }),
    }),
});
