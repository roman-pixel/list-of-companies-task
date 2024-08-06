import { configureStore } from '@reduxjs/toolkit';
import companiesReducer from './companySlice';

const store = configureStore({
  reducer: {
    companies: companiesReducer,
  },
});

export default store;
