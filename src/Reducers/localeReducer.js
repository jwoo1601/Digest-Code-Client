import { createReducer } from '@reduxjs/toolkit';
import { CHANGE_LOCALE } from '../Actions/ActionTypes';

export default localeReducer = createReducer({ locale: 'en-US', }, {
    [CHANGE_LOCALE]: (state, action) => {
        state.locale = action.payload;
    }
})