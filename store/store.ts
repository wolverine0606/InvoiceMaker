import { configureStore } from '@reduxjs/toolkit';

import invoicesReducer from '../modules/invoices/slice';

export const store = configureStore({
  reducer: {
    invoicesReducer,
  },
});
