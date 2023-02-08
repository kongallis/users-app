import { configureStore,  } from '@reduxjs/toolkit';

const reducerFn = (state = {}) => {}

const store = configureStore({
  reducer: reducerFn,
});



export default store;