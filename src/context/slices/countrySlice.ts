import { createSlice } from "@reduxjs/toolkit";
import Country from "../../entities/country";
import { api } from "../../api/api";

export const mapSlice = createSlice({
    name: "map",
    initialState: { 
        countries: [] as Country[]
    },
    reducers: {
        setCountries: ({ countries }: { countries: Country[] }, { payload }: { payload: Country[] }) => {
            countries = payload;
        },
        addCountry: ({ countries }: { countries: Country[] }, { payload }: { payload: Country }) => {
            countries.push(payload);
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(api.endpoints.getCountries.matchFulfilled, ({ countries }: { countries: Country[] }, { payload }: { payload: Country[] }) => {
            countries = payload;
        });
    }
});


export const { setCountries, addCountry } = mapSlice.actions;
