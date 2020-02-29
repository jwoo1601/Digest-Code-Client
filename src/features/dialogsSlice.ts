import { createSlice } from '@reduxjs/toolkit';

const dialogsSlice = createSlice({
    name: 'dialogs',
    initialState: {
        register: {
            visible: false,
        },
        login: {
            visible: false,
        },
    },
    reducers: {
        showDialog(state, action) {
            state[action.payload.name].visible = true;
        },
        hideDialog: (state, action) => {
            state[action.payload.name].visible = false;
        },
        toggleDialog: (state, action) => {
            state[action.payload.name].visible = !state.visible;
        },
    },
});

export const { showDialog, hideDialog, toggleDialog } = dialogsSlice.actions;

export default dialogsSlice.reducer;
