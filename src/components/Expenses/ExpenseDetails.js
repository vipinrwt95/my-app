import './ExpenseItem.css'
function ExpenseDetails(props)
{ 
  const amount=props.amount;
  const details=props.title;  
  
  return (
 <div className="expense-item__description">
     <h2>{details}</h2>
    <div className="expense-item__price">{amount}</div>
 </div>
)  
}
export default ExpenseDetails;