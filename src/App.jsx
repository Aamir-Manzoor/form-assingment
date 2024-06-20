import React, { useState } from 'react';
import './index.css';
import Form from './components/Form';

function App() {
  const [form, setForm] = useState(null);

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      {form ? (
        <Form formName={form} goBack={() => setForm(null)} />
      ) : (
        <div className='flex gap-4'>
          <button className='px-4 py-2 bg-blue-500 text-white rounded' onClick={() => setForm('Form A')}>
            Form A
          </button>
          <button className='px-4 py-2 bg-green-500 text-white rounded' onClick={() => setForm('Form B')}>
            Form B
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

