import { createSlice} from "@reduxjs/toolkit";
import Continent from "../../entities/continent";
import { Continents } from "../../entities/continents";
export const mapSlice = createSlice({
    name: "map",
    initialState: new Continents(),
    reducers: {
      
        setMap: (state: Continents, { payload } : { payload: Continent[] } ) => {
            state.map = payload;
        },
        addContinent: (state : Continents, { payload }: { payload: Continent } ) => {
            state.map?.push(payload);
        },
    },
});

export const { setMap, addContinent } = mapSlice.actions;
