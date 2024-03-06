'use client';
import { Trash2 } from 'lucide-react';
import { useState } from 'react';

interface IData {
  id: number;
  name: string;
  value: number;
  quantity: number;
}

function ItemList(props: { data: IData; deleteItem: any }) {
  const [quantity, setQuantity] = useState(props.data.quantity);
  const [value, setValue] = useState(props.data.value);

  return (
    <li className='flex justify-end items-center p-2 rounded-xl outline-none gap-10'>
      <span className='text-center'>{props.data.name}</span>
      <input
        className='rounded-xl text-center outline-none border-b-slate-900 border-b-2'
        type='number'
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <input
        className='rounded-xl text-center outline-none border-b-slate-900 border-b-2'
        type='number'
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <Trash2
        className='cursor-pointer'
        onClick={() => props.deleteItem(props.data.id)}
      />
    </li>
  );
}

export default function FormList() {
  const [value, setValue] = useState('');
  const [data, setData] = useState<IData[] | []>(
    JSON.parse(localStorage.getItem('data') || '[]')
  );

  function addItem(e: any) {
    e.preventDefault();
    if (value === '') return;
    const id = data?.length ? data[data.length - 1].id + 1 : 1;
    console.log(id);
    const item = {
      id,
      name: value,
      value: 0,
      quantity: 1,
    };
    localStorage.setItem('data', JSON.stringify([...data, item]));
    setData([...data, item]);

    setValue('');
  }

  function deleteItem(id: number) {
    const newData = data?.filter((item) => item.id !== id);
    localStorage.setItem('data', JSON.stringify(newData));
    setData(newData);
  }

  return (
    <div className='flex flex-col items-center justify-center gap-3 mt-2 mx-auto w-96'>
      <form className='flex justify-between mt-2 rounded-xl  outline-none'>
        <input
          className='p-3 rounded-xl outline-none border-b-slate-900 border-b-2 w-full'
          type='text'
          placeholder='Adicionar a lista...'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className='bg-slate-900 text-white p-3 rounded-md cursor-pointer border-none m-3 text-sm'
          onClick={addItem}
        >
          +
        </button>
      </form>

      <ul
        id='list'
        className='flex flex-col gap-2 mt-2 p-2 rounded-xl outline-none mx-auto w-96 justify-center items-center'
      >
        {data?.map((item) => (
          <ItemList key={item.id} data={item} deleteItem={deleteItem} />
        ))}
      </ul>
    </div>
  );
}
