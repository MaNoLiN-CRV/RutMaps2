import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Country from "../entities/country";
import {CountryResponse } from "../entities/responses/countryResponse";
import Coords from "../entities/coords";
import { ContinentEnum } from "../entities/continents";
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
                    return new Country (
                        country.name.common,
                        country.capital?.[0],
                        country.languages?.[Object.keys(country.languages)[0]],
                        country.flags.png,
                        new Coords(
                            country.latlng[0],
                            country.latlng[1]
                        ),
                        country.continents as unknown as ContinentEnum[]
                );
                }) as Country[];
            } 
        }),
    }),
});
export const { useGetCountriesQuery } = api;
