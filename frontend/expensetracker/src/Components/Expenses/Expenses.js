import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';
import ExpenseForm from './ExpenseForm';

function Expenses() {
    const {expenses, getExpenses, deleteExpense, totalExpenses} = useGlobalContext()

    useEffect(() =>{
        getExpenses()
    }, [])
    return (
        <ExpenseStyled>
            <InnerLayout>
                <h1>Expenses</h1>
                <h2 className="total-income">Total Expense: <span>₹{totalExpenses()}</span></h2>
                <div className="income-content">
                    <div className="form-container">
                        <ExpenseForm />
                    </div>
                    <div className="incomes">
                        {expenses.map((income) => {
                            const {_id, title, amount, date, category, description, type} = income;
                            console.log(income)
                            return <IncomeItem
                                key={_id}
                                id={_id} 
                                title={title} 
                                description={description} 
                                amount={amount} 
                                date={date} 
                                type={type}
                                category={category} 
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteExpense}
                            />
                        })}
                    </div>
                </div>
            </InnerLayout>
        </ExpenseStyled>
    )
}

const ExpenseStyled = styled.div`
    display: flex;
    overflow: auto;
    width: 100%;
    
    .total-income {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 0.7rem;
        margin: 0.75rem 0;
        margin-top: 0px;
        font-size: 1.3rem;
        gap: .5rem;
        
        span {
            font-size: 1.8rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }
    
    .income-content {
        display: flex;
        gap: 1.5rem;
        width: 100%;
        
        .form-container {
            flex: 1;
        }
        
        .incomes {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
        }
    }

    @media (max-width: 1024px) {
        .income-content {
            flex-direction: column;
        }
    }
`;

<<<<<<< HEAD
export default Expenses
=======

export default Expenses
>>>>>>> b314a96 (final commit)
