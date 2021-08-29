// containning Action center 
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { domainName } from '../../app/api'


export const signIn = createAsyncThunk('user/signIn', async (data) =>{
    const response = await axios.post(`${domainName}login/`, data)
    return response
})

export const fetchUser = createAsyncThunk('user/fetchUser', async () =>{
    const response = await axios.get(`${domainName}test-auth/`)
    return response
})

export const signOut = createAsyncThunk('user/logout', async () =>{
    const response = await axios.get(`${domainName}logout`)
    return response.status
})

export const cancelApply = createAsyncThunk('user/cancelApply', async (actionId) =>{
    const response = await axios.delete(`${domainName}cancelApply?id=${actionId}`)
    return response.status
})

export const fetchActions = createAsyncThunk('user/fetchActions', async (jobId) =>{
    const response = await axios.get(`${domainName}fetchActions`)
    return response.actions
})


const userSlice = createSlice({
    name: 'user',
    initialState: {
        user:{
            preferName: '',
            actions: [],
        },
    },
    reducers: {
        toggleLoginPanel(state, action) {
            state.isLoginPanelOpen = !state.isLoginPanelOpen
        },
        toggleApplyPanel(state, action) {
            state = !state.isApplyPanelOpen
        },
    },
    extraReducers: {
        [signIn.fulfilled]: (state, action) => {
            state.user.preferName = action.payload.data.username
        },
        
        [fetchUser.fulfilled]: (state, action) => {
            state.user.preferName = action.payload.username
        },
        [fetchUser.rejected]: (state, action) => {
            console.warn("error")
        },
        [signOut.fulfilled]: (state, action) => {
            if (action.payload.status === 200){
                state.preferName = ''
            }
        },
    },
})

export default userSlice.reducer

// export selector 