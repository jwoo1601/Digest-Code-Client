import { createSlice } from '@reduxjs/toolkit';

const localeSlice = createSlice({
    name: 'locale',
    initialState: {
        locale: 'en-US',
    },
    reducers: {
        changeLocale(state, action) {
            state.locale = action.payload;
        },
    },
});

export const { changeLocale } = localeSlice.actions;

export default localeSlice.reducer;
