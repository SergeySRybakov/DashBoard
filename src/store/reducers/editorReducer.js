import { createSlice } from "@reduxjs/toolkit";
const initialState = { isEditorModeOn: true };

export const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    setIsEditorModeOn: (state, action) => {
      state.isEditorModeOn = action.payload;
    },
    toggleEditorMode: state => {
      state.isEditorModeOn = !state.isEditorModeOn;
    },
  },
});

export const editorReducer = editorSlice.reducer;
export const { setIsEditorModeOn, toggleEditorMode } = editorSlice.actions;
