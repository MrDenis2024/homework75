import CiphersForm from './components/CiphersForm';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectCiphersLoading} from './CiphersSlice';
import {CipherMutation} from '../../types';
import {encode} from './CiphersThunks';

const Cipher = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectCiphersLoading);

  const onFormDecoded = async (cipherMutation: CipherMutation) => {
    await dispatch(encode(cipherMutation));
  };

  return (
    <>
      <CiphersForm onSubmitDecode={onFormDecoded} isLoading={isLoading}/>
    </>
  );
};

export default Cipher;