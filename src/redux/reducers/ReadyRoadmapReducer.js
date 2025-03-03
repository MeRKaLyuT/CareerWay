import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    roadmaps: [],
    currentPage: 1,
    totalPages: 0,
    isLoading: false,
    error: null,
};

const roadmapSlice = createSlice({
    name: 'roadmaps',
    initialState,
    reducers: {
        startLoading(state) {
            state.isLoading = true;
        },
        loadSuccess(state, action) {
            const {roadmaps, totalPages} = action.payload;
            state.roadmaps.push(...roadmaps);
            state.totalPages = totalPages;
            state.isLoading = false;
        },
        loadFailure(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        incrementPage(state) { 
            state.currentPage += 1;
        },
    },
});

export const {
    startLoading,
    loadSuccess,
    loadFailure,
    incrementPage,
} = roadmapSlice.actions;

export default roadmapSlice.reducer;
