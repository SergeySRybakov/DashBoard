import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
	name: 'counter',
	initialState: {counter: 0},
	reducers: {
		increment: (state) => {
			state.counter++;
		},
		setCounter: (state, action) => {
			state.counter = action.payload;
		}
	},
})

export const counterReducer = counterSlice.reducer;
export const {increment, setCounter} = counterSlice.actions;