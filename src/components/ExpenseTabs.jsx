const ExpenseTabs = ({ setActive }) => {
  const categories = ['All', 'Food', 'Travel', 'Shopping', 'Health'];

  return (
    <div className='flex gap-2 mb-4 justify-center text-sm animate-fadeIn'>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`px-4 py-2 rounded \${active === cat ? 'bg-cyan-400 text-black' : 'bg-zinc-700 text-white'}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default ExpenseTabs;
