import Expenses from "./components/Expenses/Expenses";
import './components/Expenses/ExpenseItem.css';

const App=()=> {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: 'LA'
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12),
      location:'UK' },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location:'NZ'

    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      location:'NYC'
    },
  ];
  
  return (
   <div>
    <Expenses items={expenses} />
    </div>
  );
}

export default App;
