import styled from 'styled-components'
import { shade } from 'polished'


export const Button = styled.button`
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
`