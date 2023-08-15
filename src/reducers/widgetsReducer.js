import { createSlice } from '@reduxjs/toolkit';
const initialState = {widgetsArray: []};

export const widgetSlice = createSlice({
    name: 'widgetsArray',
    initialState,
    reducers: {
        setWidgetsArray: (state, action) => {
            state.widgetsArray = [...state.widgetsArray, action.payload];
            console.log(state.widgetsArray)
        },
        resetWidgetsArray: (state, action) => {
            state.isEditorModeOn = action.payload;
        }
    },
})

export const widgetReducer = widgetSlice.reducer;
export const { setWidgetsArray, resetWidgetsArray } = widgetSlice.actions;