import { createSlice } from '@reduxjs/toolkit';
const initialState = {isAuth: true};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsAuth: (state, action) => {
            state.isAuth = action.payload;
        },
        resetAuth: (state, action) => {
            state.isAuth = !state.isAuth;
        }
    },
})

export const authReducer = authSlice.reducer;
export const { setIsAuth, resetAuth } = authSlice.actions;