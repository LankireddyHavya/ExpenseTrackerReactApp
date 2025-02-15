import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { useGlobalContext } from '../../context/globalContext'
import Button from '../../Button/Button'
import { plus } from '../../utils/Icons'


function ExpenseForm() {
    const {addExpense, error} =useGlobalContext()
    const [inputState, setInputState]=useState({
        title: '',
        amount:'',
        date: '',
        category:'',
        description:'',
    })

    const {title,amount,date,category,description}=inputState;

    const handleInput = name => e =>{
        setInputState({...inputState, [name]: e.target.value})
    }

    const handleSubmit = e =>{
        e.preventDefault()
        addExpense(inputState)
        setInputState({
            title: '',
            amount:'',
            date: '',
            category:'',
            description:'',
        })
    }

  return (
    <ExpenseFormStyled onSubmit={handleSubmit}>
        {error && <p className='error'>{error}
        </p>}
        <div className="input-control">
            <input 
            type="text"
            value={title}
            name={'title'}
            placeholder="Expense Title"
            onChange={handleInput('title')}
            />

        </div>
        <div className="input-control">
            <input 
            type="text"
            value={amount}
            name={'amount'}
            id={'amount'}
            placeholder="Expense Amount"
            onChange={handleInput('amount')}
            />

        </div>
        <div className="input-control">
             <DatePicker 
             id='date'
             placeholderText='Enter a date'
             selected={date}
             dateFormat="dd/MM/yyyy"
             onChange={(date)=>{
                setInputState({...inputState, date: date})
                }}
            />
        </div>
        <div className="selects input-control">
            <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                <option value="" disabled> Select Option</option>
                <option value="education">Education</option>
                <option value="groceries">Groceries</option>
                <option value="health">Health</option>
                <option value="subscriptions">Subscriptions</option>
                <option value="clothing">Clothing</option>
                <option value="other">Other</option>
            </select>

        </div>
        <div className="input-control">
            <textarea name="description" value={description} placeholder='Add a reference' id="description" cols="30" rows="4" onChange={handleInput('description')}></textarea>
            
        </div>

        <div className="submit-btn">
            <Button
             name={'Add Expense'}
             icon={plus}
             bPad={'.8rem 1.6rem'}
             bRad={'30px'}
             bg={'var(--color-accent)'}
             color={'#fff'}

            />

        </div>

        
    </ExpenseFormStyled>
  )
}


const ExpenseFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;  

    input, textarea, select {
        font-family: inherit;
        font-size: 0.9rem;  
        outline: none;
        border: none;
        padding: 0.3rem 0.8rem;  
        border-radius: 5px;
        border: 1px solid #fff;  
        background: white;
        resize: none;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        color: rgba(2, 2, 19, 0.9);
        
        &::placeholder {
            color: rgba(0, 0, 0, 0.4);
            font-size:16px;
            opacity:100%;
        }
    }


    .input-control {
        input {
            width: 280px; 
            height: 45px;  
        }

        textarea {
            width: 280px;  
            height: 90px;  
            min-height: 60px;  
        }
    }

    .selects {
        display: flex;
        justify-content: flex-start;  
         &::placeholder {
            color: rgba(0, 0, 0, 0.4);
            font-size:16px;
            opacity:100%;
        }
        select {
            width: 280px;  
            height: 45px;  
            color: rgba(34, 34, 96, 0.4);
            
            &:focus, &:active {
                color: rgb(13, 13, 53);
            }
                
        }
    }

    .react-datepicker-wrapper {
        width: 280px; 
        
        input {
            width: 100%;
            height: 45px; 
        }
    }

    .submit-btn {
        margin-top: 0.5rem;  
        
        button {
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            &:hover {
                background: var(--color-green) !important;
            }
        }
    }
`;
export default ExpenseForm