import { createReducer } from '@reduxjs/toolkit';
import { FETCH_POSTS, FETCH_POST_COMMENTS } from '../Actions/ActionTypes';

export default postReducer = createReducer({ }, {
    [CHANGE_LOCALE]: (state, action) => {
        state.locale = action.payload;
    }
})