import { createSlice } from "@reduxjs/toolkit";

export const lightTheme = {
  background: '#FFFFFF',
  cardBackground: '#F5F5F5',
  text: '#000000',
  detailText: '#333333',
};

export const darkTheme = {
  background: '#000000',
  cardBackground: '#333333',
  text: '#FFFFFF',
  detailText: '#AAAAAA',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: lightTheme, 
  },
  reducers: {
    toggleTheme: (state) => {
        state.theme = state.theme.background === lightTheme.background ? darkTheme : lightTheme;
      }
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice;