import React, {useContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import { AppContext } from '../context/AppContext';
const AddExpenseForm=()=>{
    const [name, setName] = useState('');
    const {dispatch} = useContext(AppContext);
    const [cost, setCost] = useState('');
    const onSubmit = (event) =>{
        event.preventDefault();
        const expense ={
            id: uuidv4(),
            name: name,
            cost: parseInt(cost),
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        })
    };
    return (
        <form onSubmit={onSubmit}>
            <div className ="row">
                <div className='col-sm'>
                    <lable for='name'>Name</lable>
                    <input required='required'
                    type ='text'
                    className ='form-control'
                    id='name'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    >
                    
                    </input>
                </div>
                <div className='col-sm'>
                    <lablel for='cost'>Cost</lablel>
                    <input type='text'
                    required='required'
                    className='form-control'
                    id='cost'
                    value={cost}
                    onChange={(event) => setCost(event.target.value)}
                    ></input>
                </div>
                <div className='col-sm mt-4'>
                    <button 
                    type='submit'
                    className='btn btn-primary'
                    >Save</button>
                </div>
            </div>
        </form>
    )
};
export default AddExpenseForm;