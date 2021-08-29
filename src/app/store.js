import { configureStore } from '@reduxjs/toolkit'

import userReducer from '../features/user/userSlice'
import notificationsReducer from '../features/notifications/notificationsSlice'
import app from './appSlice'
export default configureStore({
    reducer: {
        app: app,
        user: userReducer,
        notification: notificationsReducer,
    },
})
