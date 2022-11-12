import React,{ useState } from'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';

function ExpenseItem(props)
{   
   //const [title,setTitle]=useState(props.title);
   const [amount,setTitle]=useState(props.amount);

const clickHandler=()=>{
    setTitle('UPDATED!');
  }
  const expenseHandler=()=>{
    setTitle('$100')
  }


 return (
     <Card className='expense-item'> 
     <ExpenseDate date={props.date}></ExpenseDate>
     <ExpenseDetails title={props.title} amount={amount} ></ExpenseDetails>
     <button onClick={clickHandler}>Change Title</button>
     <button onClick={expenseHandler}>Change expense</button>
     </Card>
); 
}

export default ExpenseItem; 