import React, {useState} from 'react';
import AppContext from '../context/AppContext';
const AddExpenseForm=()=>{
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const onSubmit = (event) =>{
        event.preventDefault();
        alert('name: '+name + ' cost: ' +cost);
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
                <div className='col-sm'>
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