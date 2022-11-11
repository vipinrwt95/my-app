import ExpenseItem from "./components/Expenses/ExpenseItem";

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
      <h1>EXPENSE TRACKER</h1>
       <ExpenseItem
         date={expenses[0].date}
         title={expenses[0].title}
         amount={expenses[0].amount}
         location={expenses[0].location}>
      </ExpenseItem>
      <ExpenseItem
         date={expenses[1].date}
         title={expenses[1].title}
         amount={expenses[1].amount}
         location={expenses[1].location}>
      </ExpenseItem>
      <ExpenseItem
         date={expenses[2].date}
         title={expenses[2].title}
         amount={expenses[2].amount}
         location={expenses[2].location}>
      </ExpenseItem>
      <ExpenseItem
         date={expenses[3].date}
         title={expenses[3].title}
         amount={expenses[3].amount}
         location={expenses[3].location}>
      </ExpenseItem> 
        
    </div>
  );
}

export default App;
