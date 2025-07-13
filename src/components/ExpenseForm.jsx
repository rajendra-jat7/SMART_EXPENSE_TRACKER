import { useEffect, useState } from 'react';

const ExpenseForm = ({ onAdd }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [note, setNote] = useState('');
  const [location, setLocation] = useState('Fetching...');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setLocation(
          `Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`
        );
      },
      () => setLocation('Unknown')
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !category) return;

    const newExp = {
      amount: Number(amount),
      category,
      note,
      location,
      date: new Date().toLocaleString(),
    };

    onAdd(newExp);
    setAmount('');
    setNote('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-zinc-900 p-4 rounded-lg mb-4 animate-fadeIn'
    >
      <h2 className='font-semibold mb-3'>➕ Add New Expense</h2>
      <div className='space-y-3'>
        <input
          type='number'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder='Amount'
          className='w-full bg-black p-2 rounded text-white border border-gray-700'
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className='w-full bg-black p-2 rounded text-white border border-gray-700'
        >
          <option>Food</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Health</option>
        </select>
        <input
          type='text'
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder='Note (optional)'
          className='w-full bg-black p-2 rounded text-white border border-gray-700'
        />
        <button className='bg-cyan-300 text-black font-bold w-full py-2 rounded hover:bg-cyan-400 transition'>
          Add Expense
        </button>
        <div className='text-sm text-gray-400'>📍 {location}</div>
      </div>
    </form>
  );
};

export default ExpenseForm;
