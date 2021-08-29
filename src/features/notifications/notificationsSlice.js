import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import axios from 'axios'
import { domainName } from '../../app/api'

const notificationsAdapter = createEntityAdapter({
    sortComparer: (a, b) => b.date.localeCompare(a.date)
})

export const fetchNotifications = createAsyncThunk(
    'notifications/fetchNotifications',
    async (_, { getState }) => {
        const allNotifications = selectAllNotifications(getState())
        const [lastNotification] = allNotifications
        const latestTimestamp = lastNotification ? lastNotification.date : ''
        const response = await axios.get(`${domainName}notifications?since=${latestTimestamp}`)
        return response.notifications
    })

const notificationsSlice = createSlice({
    name: 'notifications',
    initialState: notificationsAdapter.getInitialState(),
    reducers: {
        
    },
    extraReducers:{
        [fetchNotifications.fulfilled]: notificationsAdapter.setAll,
        [fetchNotifications.pending]: (state, action) => {
            
        }
    },
})


export default notificationsSlice.reducer

export const {
    selectAll: selectAllNotifications,
} = notificationsAdapter.getSelectors((state) => state.notifications)