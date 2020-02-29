import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
    name: 'post',
    initialState: {
        posts: [],
        comments: [],
    },
    reducers: {
        fetchPosts(state, action) {
            state.posts = action.payload;
        },
        fetchPostComments(state, action) {},
    },
});

export const { fetchPosts, fetchPostComments } = postSlice.actions;

export default postSlice.reducer;
