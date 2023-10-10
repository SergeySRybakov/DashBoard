import { createSlice } from "@reduxjs/toolkit";
const initialState = { widgetsData: [] };

export const widgetDataSlice = createSlice({
  name: "widgetsData",
  initialState,
  reducers: {
    setWidgetsData: (state, action) => {
      state.widgetsData = action.payload;
    },
    addWidgetDataElement: (state, action) => {
      state.widgetsData[action.payload.i] = action.payload.text;
    },
  },
});

export const widgetDataReducer = widgetDataSlice.reducer;
export const { setWidgetsData, addWidgetDataElement } = widgetDataSlice.actions;
