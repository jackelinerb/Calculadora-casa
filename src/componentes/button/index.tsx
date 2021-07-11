import React, { ButtonHTMLAttributes } from 'react'
import {Button} from './style'

type ButtonProps = ButtonHTMLAttributes <HTMLButtonElement>;

const ButtonForm: React.FC<ButtonProps> =({children, ...rest})=>{
    return(
        <Button {...rest}>{children}</Button>
    )
}
export default ButtonForm