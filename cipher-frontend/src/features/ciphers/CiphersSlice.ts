import {createSlice} from '@reduxjs/toolkit';


export interface CiphersState {
  cipher: string;
}

const initialState: CiphersState = {
  cipher: '',
};

export const ciphersSlice = createSlice({
  name: 'ciphers',
  initialState,
  reducers: {},
});

export const ciphersReducer = ciphersSlice.reducer;