'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TextField } from '@mui/material';

import { userAuthHandler } from '@/utils/service';
import { AuthState } from '@/utils/interfaces';

const Auth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    username: '',
    password: '',
    isLogin: true,
  });
  const router = useRouter();

  const authSubmitHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    try {
      await userAuthHandler(authState);
      router.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=' max-w-[26rem] w-screen min-h-72 h-fit rounded-lg p-8 bg-white shadow-lg grid gap-16'>
      <h2 className='font-bold tracking-wide text-2xl capitalize'>
        {authState.isLogin ? 'login' : 'register'}
      </h2>
      <form className='grid gap-10' onSubmit={authSubmitHandler}>
        <TextField
          id='username'
          type='text'
          label='Username'
          variant='filled'
          onChange={(e) =>
            setAuthState((prevState) => ({
              ...prevState,
              username: e.target.value,
            }))
          }
        />
        <TextField
          id='password'
          type='password'
          label='Password'
          variant='filled'
          onChange={(e) =>
            setAuthState((prevState) => ({
              ...prevState,
              password: e.target.value,
            }))
          }
        />
        <button
          className=' bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-sky-500 text-white rounded-md p-4 font-semibold'
          type='submit'
        >
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
