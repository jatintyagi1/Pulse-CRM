import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_SERVER;

const initialState = {
    user: null,
    isLoading: false,
    isAuthenticated: false,
    error: null,
};

// Register Admin
export const registerAdmin = createAsyncThunk('auth/register', async (userData, thunkAPI) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/api/auth/register`, userData);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(
            error.response?.data?.error || 'Something went wrong during registration.'
        );
    }
});

// Login Admin
export const loginAdmin = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/api/auth/login`, userData);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(
            error.response?.data?.error || 'Login failed. Please try again.'
        );
    }
});

// creating AuthSlice
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
        logOut: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        },
    },
    extraReducers: (builder) => {
        builder
            // Register Admin
            .addCase(registerAdmin.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(registerAdmin.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.user;
                state.isAuthenticated = true;
            })
            .addCase(registerAdmin.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            // Login Admin
            .addCase(loginAdmin.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginAdmin.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.user;
                state.isAuthenticated = true;
            })
            .addCase(loginAdmin.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { clearError, logOut } = authSlice.actions;

export default authSlice.reducer;
