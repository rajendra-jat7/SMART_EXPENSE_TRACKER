import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTabs from './components/ExpenseTabs';
import ExpenseChart from './components/ExpenseChart';
import SmartTips from './components/SmartTips';
import NetworkBanner from './components/NetworkBanner';

function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('expenses');
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (newExp) => {
    setExpenses((prev) => [newExp, ...prev]);
  };

  const filteredExpenses =
    filter === 'All' ? expenses : expenses.filter((e) => e.category === filter);

  return (
    <div className='min-h-screen text-white bg-black px-4 py-6'>
      <NetworkBanner />
      <Header />
      <Summary expenses={filteredExpenses} />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseForm onAdd={addExpense} />
      <ExpenseTabs active={filter} setActive={setFilter} />
      <SmartTips />
    </div>
  );
}

export default App;
