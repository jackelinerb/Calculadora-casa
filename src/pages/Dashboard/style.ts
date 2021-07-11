import styled from 'styled-components'
import { shade } from 'polished'

export const Title = styled.h1`
font-size: 30px;
color: #ffffff;
margin-top: 60px;
max-width: 800px;

`;

export const Form = styled.form `
margin-top: 30px;
max-width: 800px;
display:flex;
flex-direction:row;
@media (max-width: 500px) {
    flex-direction: column;
}
label{
    color: #ffff;
}

`;

export const Text = styled.h3`
font-size: 20px;
color: #ffffff;
margin-top: 30px;
max-width: 800px;

`;

export const CheckBox = styled.form `
color: #fff;
font-size: 20px;
margin-top: 10px;
max-width: 800px;
height: 50px;
display: flex;
 input{
    flex:1;
    border-radius: 10px;
    padding: 0 24px;
 }

`
export const Error = styled.span `
display:block;
color: #c53030;
margin-top: 8px;
`
