import { configureStore } from '@reduxjs/toolkit';
import { editorReducer } from './reducers/editorReducer';
import { authReducer } from './reducers/authReducer';
import { layoutReducer } from './reducers/layoutReducer';
import { widgetReducer } from './reducers/widgetsReducer';
import { widgetDataReducer } from './reducers/widgetDataReducer';

export default configureStore({
  reducer: {
    auth: authReducer,
    editor: editorReducer,
    layout: layoutReducer,
    widgetsArray: widgetReducer,
    widgetsData: widgetDataReducer
  },
})