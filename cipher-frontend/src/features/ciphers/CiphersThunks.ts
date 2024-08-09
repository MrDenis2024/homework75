import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import {CipherEncode} from '../../types';

export const encode = createAsyncThunk<string, CipherEncode>('ciphers/encode', async (cipherEncode) => {
  const {data: encoded} = await axiosApi.post('/encode', cipherEncode);
  return encoded.encoded;
});