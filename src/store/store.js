import { configureStore } from "@reduxjs/toolkit";
import { editorReducer } from "./reducers/editor";
import { authReducer } from "./reducers/auth";
import { widgetDataReducer } from "./reducers/widgets-data";

export default configureStore({
  reducer: {
    auth: authReducer,
    editor: editorReducer,
    widgetsData: widgetDataReducer,
  },
});
