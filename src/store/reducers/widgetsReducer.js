import { createSlice } from "@reduxjs/toolkit";
const initialState = { widgetsArray: [] };

export const widgetSlice = createSlice({
  name: "widgetsArray",
  initialState,
  reducers: {
    addWidgetToArray: (state, action) => {
      console.log(state.widgetsArray);
      state.widgetsArray = [...state.widgetsArray, action.payload];
      console.log(state.widgetsArray);
    },
    setWidgetsArray: (state, action) => {
      state.widgetsArray = action.payload;
    },
  },
});

export const widgetReducer = widgetSlice.reducer;
export const { setWidgetsArray, addWidgetToArray } = widgetSlice.actions;
