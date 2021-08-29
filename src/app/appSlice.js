import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { domainName } from './api';

export const jobFavorited = createAsyncThunk('user/toggleJobFavorited', async (jobId) =>{

})

export const jobUnfavorite = createAsyncThunk('user/fetchUser', async (jobId) =>{
    const response = await axios.get(`${domainName}jobUnfavorite?id=${jobId}`)
    return response.status
})
const appSlice = createSlice({
    name: 'app',
    initialState: {
        favorateJobs: [],
        isLoginPanelOpen: false,
        isApplyPanelOpen: false,
        isLoading: false,
    },
    reducers: {
        toggleLoginPanel(state, action) {
            state.isLoginPanelOpen = !state.isLoginPanelOpen
        },
        toggleApplyPanel(state, action) {
            state.isApplyPanelOpen = !state.isApplyPanelOpen
        },
        toggleLoading(state, action) {
            state.isLoading = !state.isLoading
        },
        toggleJobFavorited(state, action) {
            // state.favorateJobs.filter(item => {
            //     item.jobId === action.payload
            // })
            // if (result) {
            //     state.favorateJobs 
            // } else {
            //     state.favorateJobs.push(actin.payload)
            // }
        },
    },
    extraReducers: {
        [jobFavorited.fulfilled]: (state, action) => {
            state.push(action.payload)
        },
        [jobUnfavorite.fulfilled]: (state, action) => {
            state = action.payload ? 
                state.favorateJobs.filter(id => id !== action.payload) : state;
        },
}
})

export default appSlice.reducer