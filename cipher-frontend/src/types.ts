export interface ICipher {
  encode: string;
  decode: string;
  password: string;
}

export interface CipherMutation {
  message: string;
  password: string;
}

export interface Encode {
  encoded: string;
}

export interface Decode {
  decoded: string;
}