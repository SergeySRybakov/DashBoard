import { createSlice } from '@reduxjs/toolkit';
const initialState = { layout: [] };

export const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        addWidgets: (state, action) => {
            state.layout = action.payload;
        },
        setLayout: (state, action) => {
            state.layout = action.payload
        },
        deleteWidget: (state, action) => {
            const i = action.payload;
            state.layout = state.layout.filter((widget) => widget.i !== i);
        }
    },
})

export const layoutReducer = layoutSlice.reducer;
export const { addWidgets, setLayout, deleteWidget } = layoutSlice.actions;