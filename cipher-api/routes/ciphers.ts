import express from 'express';
import { VigenereCipher } from 'vigenere.js';
import {Decode, Encode} from '../types';

const ciphersRouter = express.Router();
const vigenere = new VigenereCipher();

ciphersRouter.post('/encode', (req, res) => {
  const encode: Encode = {
    encoded: vigenere.encrypt(req.body.message, req.body.password).toLowerCase(),
  };

  return res.send(encode);
});

ciphersRouter.post('/decode',  (req, res) => {
  const decode: Decode = {
    decoded: vigenere.decrypt(req.body.message, req.body.password).toLowerCase(),
  };

  return res.send(decode);
});

export default ciphersRouter;