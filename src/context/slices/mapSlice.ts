import { createSlice} from "@reduxjs/toolkit";
import Continent from "../../entities/continent";
class MapState {
    map?: Continent[];
}

export const mapSlice = createSlice({
    name: "map",
    initialState: new MapState(),
    reducers: {
      
        setMap: (state: MapState, { payload } : { payload: Continent[] } ) => {
            state.map = payload;
        },
        addContinent: (state : MapState, { payload }: { payload: Continent } ) => {
            state.map?.push(payload);
        },
    },
});

export const { setMap, addContinent } = mapSlice.actions;
