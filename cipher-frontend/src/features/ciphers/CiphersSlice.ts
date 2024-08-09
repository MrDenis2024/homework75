import {createSlice} from '@reduxjs/toolkit';
import {encode} from './CiphersThunks';


export interface CiphersState {
  ciphersLoading: boolean;
  encodeInner: string;
}

const initialState: CiphersState = {
  encodeInner: '',
  ciphersLoading: false,
};

export const ciphersSlice = createSlice({
  name: 'ciphers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(encode.pending, (state) => {
      state.ciphersLoading = true;
    }).addCase(encode.fulfilled, (state, {payload: encode}) => {
      state.ciphersLoading = false;
      state.encodeInner = encode;
    }).addCase(encode.rejected, (state) => {
      state.ciphersLoading = false;
    });
  },
  selectors: {
    selectCiphersLoading: (state) => state.ciphersLoading,
    selectEncode: (state) => state.encodeInner,
  },
});

export const ciphersReducer = ciphersSlice.reducer;
export const {
  selectCiphersLoading,
  selectEncode,
} = ciphersSlice.selectors;