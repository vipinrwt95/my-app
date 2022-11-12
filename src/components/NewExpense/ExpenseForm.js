import './ExpenseForm.css';

const ExpenseForm=()=>
{  
  const titlechangeHandler=(event)=>{
   console.log(event.target.value);

  }
  const amounthandler=(event)=>
  {
    console.log(event.target.value);
  }

  return (
    <form >
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type='text' onChange={titlechangeHandler} />
        </div>
        <div className='new-expense__control'>
            <label>Amount</label>
            <input type='number' onChange={amounthandler} min="0.01" step="0.01" />
        </div>
        <div className='new-expense__control'>
            <label>Date</label>
            <input type='date' min="2019-01-01" max="2022-12-31" />
        </div>
        <div className='new-expense__actions'><button type='submit'>Add Expense</button></div>
        </div>  
        </form>
     )
}
export default ExpenseForm;