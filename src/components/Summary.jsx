const Summary = ({ expenses }) => {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className='bg-zinc-800 p-4 rounded-lg mb-4 text-center shadow-lg'>
      <h2 className='text-lg font-semibold'>📊 Monthly Spending Summary</h2>
      <div className='text-2xl mt-2 font-bold text-cyan-300'>₹{total}</div>
    </div>
  );
};

export default Summary;
