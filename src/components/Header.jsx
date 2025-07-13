import { FaMoneyBillWave } from 'react-icons/fa';

const Header = () => (
  <div className='text-center mb-6 animate-fadeIn'>
    <h1 className='text-4xl font-bold text-white flex justify-center items-center gap-2'>
      <FaMoneyBillWave className='text-yellow-400' />
      Smart Expense Tracker
    </h1>
    <p className='text-gray-400 mt-2'>
      Track your spending, visualize habits, and grow financially.
    </p>
  </div>
);

export default Header;
