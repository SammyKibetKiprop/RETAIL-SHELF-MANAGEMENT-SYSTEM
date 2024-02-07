'use client';
import { useState } from 'react';
import { TextField } from '@mui/material';

interface AuthState {
  email: string;
  password: string;
  isLogin: boolean;
}

const Auth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    email: '',
    password: '',
    isLogin: true,
  });

  return (
    <div className=' max-w-[26rem] w-screen min-h-72 h-fit rounded-lg p-8 bg-white shadow-lg grid gap-16'>
      <h2 className='font-bold tracking-wide text-2xl capitalize'>
        {authState.isLogin ? 'login' : 'register'}
      </h2>
      <form className='grid gap-10'>
        <TextField
          id='email'
          type='email'
          label='Username'
          variant='filled'
        />
        <TextField
          id='password'
          type='password'
          label='Password'
          variant='filled'
        />
        <button className=' bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-sky-500 text-white rounded-md p-4 font-semibold'>
          {authState.isLogin ? 'Login' : 'Register'}
        </button>
      </form>

      <div className='flex flex-col gap-4 text-sm font-medium tracking-wide'>
        <p>{authState.isLogin ? 'Welcome back' : 'Welcome'}</p>

        <p>
          {authState.isLogin
            ? 'Don’t have an account?'
            : 'Already have an account?'}{' '}
          <span
            className='text-blue-700 hover:underline cursor-pointer capitalize'
            onClick={() =>
              setAuthState((prevState) => ({
                ...prevState,
                isLogin: !prevState.isLogin,
              }))
            }
          >
            {authState.isLogin ? 'register' : 'login'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
