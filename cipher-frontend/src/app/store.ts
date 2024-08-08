import {configureStore} from '@reduxjs/toolkit';
import {ciphersReducer} from '../features/ciphers/CiphersSlice';


export const store = configureStore({
  reducer: {
    ciphers: ciphersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;