'use client';

import { InputAdornment, InputLabel, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddShelf = () => {
  const [formState, setFormState] = useState({
    name: '',
    id: '',
    category: '',
    prodType: '',
    product: '',
    prodId: '',
    prodDesc: '',
    price: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <div className='w-[85vw] px-2 sm:px-2 mx-auto md:mx-0 sm:w-full md:max-w-screen-sm'>
      <h3 className='font-bold tracking-wide text-xl capitalize mb-10'>
        Add Shelf
      </h3>
      <form
        className='grid gap-4 grid-cols-2'
        onSubmit={handleSubmit}
      >
        <div className='col-span-2 flex gap-10 justify-start items-center'>
          <InputLabel
            htmlFor='name'
            className=' font-semibold text-gray-700 text-md w-1/6 text-right'
          >
            Shelf Name
          </InputLabel>
          <TextField
            id='name'
            variant='outlined'
            size='small'
            placeholder='Shelf 1 Name'
            className='flex-1'
            onChange={(e) =>
              setFormState((prevState) => ({
                ...prevState,
                name: e.target.value,
              }))
            }
          />
        </div>

        <div className='col-span-2 flex gap-10 justify-start items-center'>
          <InputLabel
            htmlFor='id'
            className=' font-semibold text-gray-700 text-md w-1/6 text-right'
          >
            Shelf ID
          </InputLabel>
          <TextField
            id='id'
            variant='outlined'
            size='small'
            placeholder='001'
            className='flex-1'
            onChange={(e) =>
              setFormState((prevState) => ({
                ...prevState,
                id: e.target.value,
              }))
            }
          />
        </div>

        <div className='col-span-2 flex gap-10 justify-start items-center'>
          <InputLabel
            htmlFor='category'
            className=' font-semibold text-gray-700 text-md w-1/6 text-right'
          >
            Category
          </InputLabel>
          <TextField
            id='category'
            variant='outlined'
            size='small'
            placeholder='Category 1'
            className='flex-1'
            onChange={(e) =>
              setFormState((prevState) => ({
                ...prevState,
                category: e.target.value,
              }))
            }
          />
        </div>

        <div className='col-span-2 flex gap-10 justify-start items-start'>
          <InputLabel
            htmlFor='prod-type'
            className=' font-semibold text-gray-700 text-md w-1/6 text-right'
          >
            Product Type
          </InputLabel>
          <TextField
            id='prod-type'
            variant='outlined'
            size='small'
            placeholder='cereals, snacks, etc.'
            className='flex-1'
            onChange={(e) =>
              setFormState((prevState) => ({
                ...prevState,
                prodType: e.target.value,
              }))
            }
          />
        </div>

        <div className='col-span-2 flex gap-10 justify-start items-start'>
          <InputLabel
            htmlFor='prod'
            className=' font-semibold text-gray-700 text-md w-1/6 text-right'
          >
            Product
          </InputLabel>
          <TextField
            id='prod'
            variant='outlined'
            size='small'
            placeholder='bread, milk, etc.'
            className='flex-1'
            onChange={(e) =>
              setFormState((prevState) => ({
                ...prevState,
                product: e.target.value,
              }))
            }
          />
        </div>

        <div className='col-span-2 flex gap-10 justify-start items-start'>
          <InputLabel
            htmlFor='prod-id'
            className=' font-semibold text-gray-700 text-md w-1/6 text-right'
          >
            Product ID
          </InputLabel>
          <TextField
            id='prod-id'
            variant='outlined'
            size='small'
            placeholder='001'
            className='flex-1'
            onChange={(e) =>
              setFormState((prevState) => ({
                ...prevState,
                prodId: e.target.value,
              }))
            }
          />
        </div>

        <div className='col-span-2 row-span-3 flex gap-10 justify-start items-start'>
          <InputLabel
            htmlFor='prod-desc'
            className=' font-semibold text-gray-700 text-md w-1/6 text-right'
          >
            Description
          </InputLabel>
          <TextField
            id='prod-desc'
            variant='outlined'
            size='small'
            placeholder='Description of product'
            multiline
            rows={5}
            className='flex-1'
            onChange={(e) =>
              setFormState((prevState) => ({
                ...prevState,
                prodDesc: e.target.value,
              }))
            }
          />
        </div>

        <div className='col-span-2 flex gap-10 justify-start items-start'>
          <InputLabel
            htmlFor='price'
            className=' font-semibold text-gray-700 text-md w-1/6 text-right'
          >
            Price
          </InputLabel>
          <TextField
            id='price'
            variant='outlined'
            size='small'
            className='flex-1'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>$</InputAdornment>
              ),
            }}
            onChange={(e) =>
              setFormState((prevState) => ({
                ...prevState,
                price: e.target.value,
              }))
            }
          />
        </div>

        <button
          className=' bg-slate-700 hover:bg-slate-600 text-white rounded-md py-3 px-8 font-semibold col-span-2 w-fit justify-self-end'
          type='submit'
        >
          Add Shelf
        </button>
      </form>
    </div>
  );
};

export default AddShelf;
