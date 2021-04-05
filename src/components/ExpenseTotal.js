import React, {useContext} from 'react';
import { AppContext} from '../context/AppContext';

const ExpenseTotal =() =>{
  const {expenses,budget} = useContext(AppContext);

  const totalExpenses = expenses.reduce((total,item)=>{
    return ( total = total + item.cost);
  },0);
  const alertType = totalExpenses > budget? 'alert-danger' : 'alert-success';
  return(
    <div className={`alert ${alertType}`}>
    <span>Spent so Far: ${totalExpenses}</span>
    </div> 
  ); 
};
export default ExpenseTotal;