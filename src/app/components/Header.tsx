import { ShoppingCart } from 'lucide-react';

export default function Header() {
  return (
    <header className='flex justify-between items-center p-5 bg-slate-900 text-white'>
      <div className='flex gap-4'>
        <ShoppingCart />
        <span className='font-bold text-xl'>Lista de compras</span>
      </div>
    </header>
  );
}
