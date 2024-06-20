import React from 'react';

function Form({ formName, goBack }) {
  return (
    <div className='w-full max-w-md p-4 bg-white shadow-md rounded'>
      <h1 className='text-2xl font-bold mb-4'>{formName}</h1>
      <form>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Name
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type='text'
            placeholder='Enter your name'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Email
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type='email'
            placeholder='Enter your email'
          />
        </div>
        <button
          type='button'
          className='px-4 py-2 bg-blue-500 text-white rounded'
          onClick={goBack}
        >
          Back
        </button>
      </form>
    </div>
  );
}

export default Form;
