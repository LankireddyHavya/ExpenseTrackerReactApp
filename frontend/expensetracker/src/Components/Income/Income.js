import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';

function Income() {
    const {addIncome, incomes, getIncomes, deleteIncome, totalIncome} = useGlobalContext()

    useEffect(() => {
      getIncomes()
    }, [incomes])
    
    return (
        <IncomesStyled>
            <InnerLayout>
                <h1>Incomes</h1>
                <h2 className="total-income">Total Income: <span>₹{totalIncome()}</span></h2>
                <div className="income-content">
                    <div className="form-container">
                        <Form/>
                    </div>
                    <div className="incomes">
                        {incomes.map((income) => {
                            const {_id, title, amount, date, category, description} = income;
                            return <IncomeItem
                                key={_id}
                                id={_id}
                                title={title}
                                description={description}
                                amount={amount}
                                date={date}
                                category={category}
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteIncome}
                            />
                        })}
                    </div>                
                </div>
            </InnerLayout>
        </IncomesStyled>
    )
}

const IncomesStyled = styled.div`
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
        padding: 0.75rem; 
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

export default Income