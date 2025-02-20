import React from 'react'
import styled from 'styled-components'


function Button({name,icon,onClick,bg,bPad, color, bRad}) {
  return (
    <ButtonStyled style={{
        background: bg,
        padding: bPad,
        borderRadius:bRad,
        color: color,
    }} onClick={onClick}>
        {icon}
        {name}
       
    </ButtonStyled>
  )
}

const ButtonStyled=styled.button`

outline: none;
border: none;
font-family:inherit;
display:flex;
align-items:center;
gap: .5rem;
`;

export default Button
