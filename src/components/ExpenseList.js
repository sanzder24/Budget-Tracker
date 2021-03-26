import React from 'react';
import ExpenseItem from './ExpenseItem';
const ExpenseList =() =>{

    const expenses =[
        { id: 222313, name: "Shopping", cost: 40},
        { id: 222313, name: "Holiday", cost: 20},
        { id: 222313, name: "Clothes", cost: 50},
        { id: 222313, name: "Food", cost: 10},
        { id: 222313, name: "Computer", cost: 60}
    ];
    return(
        <ul className="list-group">
            {expenses.map(((expense)=> (
            <ExpenseItem id= {expense.id} name= {expense.name} cost= {expense.cost} />
            )))}
        </ul>
    );
};
export default ExpenseList;