import {Grid, TextField} from '@mui/material';
import {LoadingButton} from '@mui/lab';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import React, {useEffect, useState} from 'react';
import {CipherMutation, ICipher} from '../../../types';
import {useAppSelector} from '../../../app/hooks';
import {selectEncode} from '../CiphersSlice';

interface Props {
  onSubmitDecode: (decode: CipherMutation) => void;
  isLoading: boolean;
}

const CiphersForm: React.FC<Props> = ({onSubmitDecode, isLoading,}) => {
  const [state, setState] = useState<ICipher>({
    decode: '',
    encode: '',
    password: '',
  });
  const encoded = useAppSelector(selectEncode);

  useEffect(() => {
    if(encoded) {
      setState((prevState) => ({
        ...prevState,
        decode: encoded,
      }));
    }
  }, [encoded]);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;

    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitDecode = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmitDecode({
      message: state.encode,
      password: state.password,
    });
  };

  const submitEncode = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(321);
  };


  return (
    <Grid container direction="column" spacing={2} sx={{width: '400px'}} mx={"auto"} >
      <Grid item component='form' id='decodeForm' onSubmit={submitDecode}>
        <TextField multiline minRows={3} label='Decode message' name='encode' id='encode' onChange={changeHandler} value={state.encode} required />
      </Grid>
      <Grid item container direction='row' spacing={1} alignItems='center' >
        <Grid item>
          <TextField label='Password' name='password' type='text' id='password' onChange={changeHandler} value={state.password} />
        </Grid>
        <Grid item>
          <LoadingButton type='submit' form='decodeForm' loading={isLoading} disabled={state.password === ''}>
            <span>{<ArrowDownwardIcon />}</span>
          </LoadingButton>
        </Grid>
        <Grid item>
          <LoadingButton type='submit' form='encodeForm' loading={isLoading} disabled={state.password === ''}>
            <span>{<ArrowUpwardIcon />}</span>
          </LoadingButton>
        </Grid>
      </Grid>
      <Grid item component='form' id='encodeForm' onSubmit={submitEncode}>
        <TextField multiline minRows={3} label='Encode message' name='decode' id='decode' onChange={changeHandler} value={state.decode} required />
      </Grid>
    </Grid>
  );
};

export default CiphersForm;