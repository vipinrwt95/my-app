import React,{ useState } from'react';
import './ExpenseForm.css';

const ExpenseForm=(props)=>
{  
  const [enteredtitle,setenteredTitle]=useState('');
  const [enteredamount,setenteredAmount]=useState('');
  const [entereddate,setenteredDate]=useState('');

  const titlechangeHandler=(event)=>{
   setenteredTitle(event.target.value)

  }
  
  const amountchangeHandler=(event)=>
  {
    setenteredAmount(event.target.value);
  }
  const datechangeHandler=(event)=>
  {
    setenteredDate(event.target.value);
  }
  const submitHandler=(event)=>
  { 
    event.preventDefault();
    const ExpenseData={
        title:enteredtitle,
        amount:enteredamount,
        date:new Date(entereddate)

    }

    props.onSaveExpenseData(ExpenseData);
    setenteredTitle('');
    setenteredAmount('');
    setenteredDate('');

  }

  return (
    <form onSubmit={submitHandler} >
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type='text'
            value={enteredtitle} 
            onChange={titlechangeHandler}/>
        </div>
        <div className='new-expense__control'>
            <label>Amount</label>
            <input type='number'value={enteredamount} onChange={amountchangeHandler} min="0.01" step="0.01" />
        </div>
        <div className='new-expense__control'>
            <label>Date</label>
            <input type='date' min="2019-01-01" max="2022-12-31"value={entereddate} onChange={datechangeHandler} />
        </div>
        <div className='new-expense__actions'><button type='submit' >Add Expense</button></div>
        </div>  
        </form>
     )
}
export default ExpenseForm;