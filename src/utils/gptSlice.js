import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        gptSearchView:false,
        movieSearchView:false,
        tvShowSearchView:false,
    },
    reducers:{
        toggleGptSearchView:(state,action)=>{
            state.gptSearchView = !state.gptSearchView
        },
        toggleTvShowView:(state,action)=>{
            state.tvShowSearchView = !state.tvShowSearchView
        },
        toggleMovieSearchView:(state,action)=>{
            state.movieSearchView = !state.movieSearchView
        },
    }
});

export const { toggleGptSearchView, toggleTvShowView, toggleMovieSearchView } = gptSlice.actions;

export default gptSlice.reducer;