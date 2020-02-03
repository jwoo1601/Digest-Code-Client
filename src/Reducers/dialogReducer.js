import { createReducer } from '@reduxjs/toolkit';
import { SHOW_DIALOG, HIDE_DIALOG, TOGGLE_DIALOG } from '../Actions/ActionTypes';

export default dialogReducer = createReducer({ }, {
    [SHOW_DIALOG]: (state, action) => {
        state[action.payload.name].visible = true;
    },
    [HIDE_DIALOG]: (state, action) => {
        state[action.payload.name].visible = false;
    },
    [TOGGLE_DIALOG]: (state, action) => {
        state[action.payload.name].visible = !state.visible;
    }
})