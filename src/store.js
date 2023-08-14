import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterReducer';
import (counterReducer)

export default configureStore({
  reducer: {
    counter: counterReducer
  },
})