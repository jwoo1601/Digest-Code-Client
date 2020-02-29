import { createSlice } from '@reduxjs/toolkit';

const coursesSlice = createSlice({
    name: 'courses',
    initialState: {},
    reducers: {
        getCourseSummaryListSuccess(state, action) {},
    },
});

export const { getCourseSummaryListSuccess } = coursesSlice.actions;

export default coursesSlice.reducer;
