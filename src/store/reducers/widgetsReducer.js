import { createSlice } from "@reduxjs/toolkit";
const initialState = { widgetsArray: [] };

export const widgetSlice = createSlice({
  name: "widgetsArray",
  initialState,
  reducers: {
    addWidgetToArray: (state, action) => {
      state.widgetsArray = [...state.widgetsArray, action.payload];
    },
    setWidgetsArray: (state, action) => {
      state.widgetsArray = action.payload;
    },
    deleteWidgetFromArray: (state, action) => {
      const i = action.payload;
      state.widgetsArray[i] = null;
      console.log(state.widgetsArray);
    },
  },
});

export const widgetReducer = widgetSlice.reducer;
export const { setWidgetsArray, addWidgetToArray, deleteWidgetFromArray } = widgetSlice.actions;
