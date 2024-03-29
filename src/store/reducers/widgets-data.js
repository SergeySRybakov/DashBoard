import { createSlice } from "@reduxjs/toolkit";
const initialState = { widgetsData: [] };

export const widgetDataSlice = createSlice({
  name: "widgetsData",
  initialState,
  reducers: {
    setWidgetsData: (state, action) => {
      state.widgetsData = action.payload;
    },
  },
});

export const widgetDataReducer = widgetDataSlice.reducer;
export const { setWidgetsData, addWidgetDataElement } = widgetDataSlice.actions;
