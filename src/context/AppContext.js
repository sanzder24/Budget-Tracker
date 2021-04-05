import { createContext, useReducer } from "react";
const AppReducer =(state, action)=>{
    switch(action.type){
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
    const[state, dispatch] = useReducer(AppReducer, InitialState);
    return(<AppContext.Provider value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
    }}>
        {props.children}
    </AppContext.Provider>)
};