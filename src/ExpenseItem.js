import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';

function ExpenseItem(props)
{  const removeItemHandler=()=>{
 
   let parent=document.querySelector('.expenses')
   let childtoberemoved=document.querySelector('.expense-item');
   parent.removeChild(childtoberemoved); 

}
 return (
     <Card className='expense-item'> 
     <ExpenseDate date={props.date}></ExpenseDate>
     <ExpenseDetails title={props.title} amount={props.amount} ></ExpenseDetails>
     <button onClick={removeItemHandler}>DELETE EXPENSE</button>
     </Card>
);
}

export default ExpenseItem; 
