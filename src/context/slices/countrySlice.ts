import { createSlice} from "@reduxjs/toolkit";
import Continent from "../../entities/continent";
import { Continents } from "../../entities/continents";
import { api } from "../../api/api";
export const mapSlice = createSlice({
    name: "map",
    initialState: new Continents(),
    reducers: {
      
        setMap: ( { map }: Continents, { payload } : { payload: Continent[] } ) => {
            map = payload;
        },
        addContinent: ({ map } : Continents, { payload }: { payload: Continent } ) => {
            map.push(payload);
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(api.endpoints.getCountries.matchFulfilled, ({ map } : Continents, { payload } : { payload: Continent[] }) => {
            map = payload;
        });
    }
});

export const { setMap, addContinent } = mapSlice.actions;
