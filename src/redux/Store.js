import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducers/combine';
import testReducer from './reducers/testReducer';

const store = configureStore({
  // reducer: rootReducer,
  reducer: {
    test: testReducer,
  }
});

export default store;