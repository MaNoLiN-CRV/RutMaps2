import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Region } from '../entities/continents';
import config from '../config/config';
import mapCountries from '../mapper/mapper';
// Slice for the API 
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: config.API_URL,
  }),
  endpoints: (builder) => ({
    getCountryByRegion: builder.query({
      query: ( region: Region) => '/region/' + region.toString(),
      transformResponse: (response: any) => {
        return mapCountries(response);
      },
      
    }),
  }),
});

export const { useGetCountryByRegionQuery } = api;