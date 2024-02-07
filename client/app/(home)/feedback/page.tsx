'use client'
import { TextField } from '@mui/material';
import React from 'react';

const FeedbackForm = () => {
  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className='w-[35rem] min-h-3/4 h-auto m-auto mt-8 grid bg-white p-6 rounded-lg'>
      <form
        className='grid grid-cols-2 grid-row-7 gap-5 gap-y-6'
        onSubmit={formSubmitHandler}
      >
        <p className='row-start-1 col-span-2 text-pink-600 text-lg font-bold'>
          We&apos;re glad to hear from you!
        </p>
        <TextField
          variant='outlined'
          size='small'
          label='First name'
          className='col-start-1 col-span-1 row-start-2'
        />
        <TextField
          variant='outlined'
          size='small'
          label='Last name'
          className='col-start-2 col-span-1 row-start-2'
        />
        <TextField
          variant='outlined'
          size='small'
          label='Email'
          className='col-start-1 col-span-2 row-start-3'
        />
        <TextField
          variant='outlined'
          size='small'
          label='Message'
          multiline
          rows={4}
          className='col-start-1 col-span-2 row-start-4 row-span-3'
        />
        <button
          type='submit'
          className='bg-sky-500 hover:bg-sky-500/75 text-white rounded-lg shadow-xl px-6 py-2 row-start-7 row-span-1  w-fit'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
