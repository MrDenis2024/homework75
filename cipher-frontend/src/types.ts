export interface ICipher {
  encode: string;
  decode: string;
  password: string;
}

export interface CipherMutation {
  message: string;
  password: string;
}

export interface CipherEncode {
  message: string;
  password: string;
}