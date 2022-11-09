import './ExpenseItem.css';

function ExpenseItem()
{ const expensedate=new Date(2021,2,28);
  const expenseTitle='Car purchase';
  const expenseAmount=500;
  const expenseLocation='Delhi'; 
  return (
   <div className="expense-item">
    <div>{expensedate.toISOString()}</div>
    <div className="expense-item__description">
     <h2>{expenseTitle}</h2>
     <div>{expenseLocation}</div>
     <div className="expense-item__price">${expenseAmount}</div>
     
     </div>
  </div>

  );
}


export default ExpenseItem;