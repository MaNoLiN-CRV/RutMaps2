import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CountryResponse } from '../entities/responses/countryResponse';
import { Region } from '../entities/continents';
import Country from '../entities/country';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://restcountries.com/v3.1',
  }),
  endpoints: (builder) => ({
    getCountryByRegion: builder.query({
      query: ( region: Region) => '/region/' + region.toString(),
      transformResponse: (response: any) => {
        return response.map((country: CountryResponse) => ({
          name: country.name.common,
          capital: country?.capital?.[0] ?? 'unknown',
          language: country?.languages?.[Object.keys(country.languages)[0]] ?? 'unknown',
          flag: country.flags.png,
          coords: {
            lat: country.latlng[0],
            lng: country.latlng[1],
          },
          region: country.region.toString(),
        } )) as Country[];
      },
      
    }),
  }),
});

export const { useGetCountryByRegionQuery } = api;