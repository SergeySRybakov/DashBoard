import { createSlice } from '@reduxjs/toolkit';
const initialState = {isEditorModeOn: false};

export const editorSlice = createSlice({
    name: 'editor',
    initialState,
    reducers: {
        setIsEditorModeOn: (state, action) => {
            state.isEditorModeOn = action.payload;
        },
        resetIsEditorModeOn: (state, action) => {
            state.isEditorModeOn = !state.isEditorModeOn;
        }
    },
})

export const editorReducer = editorSlice.reducer;
export const { setIsEditorModeOn, resetIsEditorModeOn } = editorSlice.actions;