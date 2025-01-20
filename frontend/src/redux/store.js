import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './Auth/authSlice'

const store = configureStore({
    reducer: {
        auth: AuthReducer,
    }
});

export default store;