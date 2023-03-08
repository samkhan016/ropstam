import {configureStore} from '@reduxjs/toolkit';
import dataSlice from './vehiclesSlice';

const store = configureStore({
  reducer: {
    data: dataSlice,
  },
});

export default store;
