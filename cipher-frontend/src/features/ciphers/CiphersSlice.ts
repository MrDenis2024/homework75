import {createSlice} from '@reduxjs/toolkit';
import {decode, encode} from './CiphersThunks';


export interface CiphersState {
  ciphersLoading: boolean;
  encodeInner: string | null;
  decodeInner: string | null;
}

const initialState: CiphersState = {
  encodeInner: null,
  decodeInner: null,
  ciphersLoading: false,
};

export const ciphersSlice = createSlice({
  name: 'ciphers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(encode.pending, (state: CiphersState) => {
      state.decodeInner = null;
      state.encodeInner = null;
      state.ciphersLoading = true;
    }).addCase(encode.fulfilled, (state: CiphersState, {payload: encode}) => {
      state.ciphersLoading = false;
      state.encodeInner = encode;
    }).addCase(encode.rejected, (state: CiphersState) => {
      state.ciphersLoading = false;
    });

    builder.addCase(decode.pending, (state: CiphersState) => {
      state.decodeInner = null;
      state.encodeInner = null;
      state.ciphersLoading = true;
    }).addCase(decode.fulfilled, (state: CiphersState, {payload: decode}) => {
      state.ciphersLoading = false;
      state.decodeInner = decode;
    }).addCase(decode.rejected, (state: CiphersState) => {
      state.ciphersLoading = false;
    });
  },
  selectors: {
    selectCiphersLoading: (state: CiphersState) => state.ciphersLoading,
    selectEncode: (state: CiphersState) => state.encodeInner,
    selectDecode: (state: CiphersState) => state.decodeInner,
  },
});

export const ciphersReducer = ciphersSlice.reducer;
export const {
  selectCiphersLoading,
  selectEncode,
  selectDecode
} = ciphersSlice.selectors;