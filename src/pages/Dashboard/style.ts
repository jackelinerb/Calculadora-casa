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

input{
    flex:1;
    height: 50px;
    padding: 0 24px;
    border-radius: 10px;
    color: #3a3a3a;

  &:placeholder{
      color:#a8a8b3
  }  
}
button {
    width: 210px;
    height: 50px;
    background: #6a1f9a;
    color: #fff;
    transition: background-color 0.2s;
    flex:1;
    margin-top: 40px;

    &:hover{
        background: ${shade(0.2, '#6a1f9a')};
    }
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
 input{
    margin-left: 20px;
    border-radius: 10px;
    padding: 2px;
 }
 label{
     margin-left: 5px;
 }

`
