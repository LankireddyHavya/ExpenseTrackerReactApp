import React from 'react'
import styled from 'styled-components'
import { book, calender, card, circle, clothing, comment, dollar, food, medical, money, piggy, stocks, trash, tv } from '../../utils/Icons';
import Button from '../../Button/Button';
import Income from '../Income/Income';
import { dateFormate } from '../../utils/FormatDate';

function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
}) {

    const categoryicon=()=>{
        switch(category){
            case 'salary': 
               return money;
            case 'stocks':
                return stocks;
            case  'bank':
                return card;
            case 'other':
                return piggy;
            default:
                return ''
        }
}

const expensecateroryicon=()=>{
    switch(category){
        case 'education': 
           return book;
        case 'groceries':
            return food;
        case  'health':
            return medical;
        case 'subscriptions':
            return tv;
        case 'clothing':
            return clothing;
        case 'other':
                return circle;    
        default:
            return ''
    }
}
  return (
    <IncomeItemStyled indicator={indicatorColor}>
        <div className="icon">
            {type==='expense' ? expensecateroryicon() : categoryicon()}
        </div>
        <div className="content">
            <h5>{title}</h5>
            <div className="inner-content">
                <div className="text">
                    <p>{dollar} {amount}</p>
                    <p>{calender} {dateFormate(date)}</p>
                    <p>{comment}
                        {description}
                    </p>
                </div>
                <div className="btn-con">
                        <Button 
                            icon={trash}
                            bPad={'1rem'}
                            bRad={'50%'}
                            bg={'var(--primary-color'}
                            color={'#fff'}
                            iColor={'#fff'}
                            hColor={'var(--color-green)'}
                            onClick={() => deleteItem(id)}
                        />

                </div>
            </div>
        </div>
    </IncomeItemStyled>
  )
}


const IncomeItemStyled = styled.div`
   background: #FCF6F9;
   border: 2px solid #FFFFFF;
   box-shadow: 0px 1px 15px rgba(0,0,0,0.06);
   border-radius: 15px;  
   padding: 0.75rem;  
   margin-bottom: 0.75rem;  
   display: flex;
   align-items: center;
   margin-left:-150px;
   color: #222260;
   
   .icon {
       width: 60px;  
       height: 60px;  
       border-radius: 15px; 
       background: #F5F5F5;
       display: flex;
       align-items: center;
       justify-content: center;
       border: 2px solid #FFFFFF;
       
       i {
           font-size: 1.2rem;  
       }
   }
   
   .content {
       flex: 1;
       display: flex;
       flex-direction: column;
       gap: 0.15rem;  
       
       h5 {
           font-size: 0.9rem;  
           padding-left: 1.5rem;  
           position: relative;
           
           &::before {
               content: '';
               position: absolute;
               left: 0;
               top: 50%;
               transform: translateY(-50%);
               width: 0.6rem;  
               height: 0.6rem;  
               border-radius: 50%;
               background: ${props => props.indicator}
           }
       }
       
       .inner-content {
           display: flex;
           justify-content: space-between;
           align-items: center;
           
           .text {
               display: flex;
               align-items: center;
               gap: 1.2rem;  
               
               p {
                   display: flex;
                   align-items: center;
                   gap: 0.4rem; 
                   color: var(--primary-color);
                   opacity: 0.8;
                   font-size: 0.9rem;  
               }
           }
       }
   }
`;

export default IncomeItem