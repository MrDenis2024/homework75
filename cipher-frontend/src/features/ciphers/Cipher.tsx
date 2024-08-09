import CiphersForm from './components/CiphersForm';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectCiphersLoading} from './CiphersSlice';
import {CipherMutation} from '../../types';
import {decode, encode} from './CiphersThunks';
import {Typography} from '@mui/material';

const Cipher = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectCiphersLoading);

  const onFormDecoded = async (cipherMutation: CipherMutation) => {
    await dispatch(encode(cipherMutation));
  };

  const onFormEncoded = async (cipherMutation: CipherMutation) => {
    await dispatch(decode(cipherMutation));
  };

  return (
    <>
      <Typography variant="h4" sx={{mb: 2}} textAlign='center'>Ciphers</Typography>
      <CiphersForm onSubmitDecode={onFormDecoded} onSubmitEncode={onFormEncoded} isLoading={isLoading}/>
    </>
  );
};

export default Cipher;