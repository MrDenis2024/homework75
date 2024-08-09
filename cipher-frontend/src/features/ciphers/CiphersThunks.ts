import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import {CipherMutation, Decode, Encode} from '../../types';

export const encode = createAsyncThunk<string, CipherMutation>('ciphers/encode', async (cipherEncode) => {
  const {data: encoded} = await axiosApi.post<Encode>('/encode', cipherEncode);
  return encoded.encoded;
});

export const decode = createAsyncThunk<string, CipherMutation>('ciphers/decode', async (cipherDecode) => {
  const {data: decoded} = await axiosApi.post<Decode>('/decode', cipherDecode);
  return decoded.decoded;
});