import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://restcountries.com/v3.1",
    }),
    endpoints: (builder) => ({
        getCountries: builder.query({
            query: () => "/all",
        }),
    }),
});
