import { createContext, useReducer } from "react";
const AppReducers =(state, action)=>{
    switch(action.type){

        case 'ADD_EXPENSE': 
        return {
            ...state, 
            expenses:[...state.expenses, action.payload],
        };
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense)=>expense.id!==action.payload),
            };
        case 'SET_BUDGET':
            return {
                ...state,
                budget: action.payload,
            };
        default:
            return state;
    }
}
const InitialState ={
    budget: 2000,
    expenses:[
        {
            id:12, name: 'shopping', cost: 20
        },
        {
            id:13, name: 'Buying', cost: 10
        },
    ],
};
export const AppContext = createContext();

export const AppProvider =(props) =>{
    const[state, dispatch] = useReducer(AppReducers, InitialState);
    return(<AppContext.Provider value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
    }}>
        {props.children}
    </AppContext.Provider>)
};