'use client';
import Image from 'next/image';
import Header from './components/Header';
import FormList from './components/FormList';
import { useState } from 'react';

export default function Home() {
  const [valorTotal, setValorTotal] = useState(0);

  function calcValorTotal() {
    return;
  }
  return (
    <main>
      <Header />
      <div className='flex items-center justify-center gap-3 mt-2'>
        <span className='mt-2'>Valor total:</span>
        <div className='flex col justify-center items-center gap-3 w-40 h-8'>
          {valorTotal}
        </div>
        <button
          className='rounded-md outline-none border-b-2 border-b-slate-900 bg-slate-100 text-black cursor-pointer p-1 px-3 hover:bg-slate-200 hover:border-b-2 hover:border-b-slate-900 transition duration-300 ease-in-out mt-'
          onClick={calcValorTotal}
        >
          Salvar
        </button>
      </div>
      <FormList />
    </main>
  );
}
