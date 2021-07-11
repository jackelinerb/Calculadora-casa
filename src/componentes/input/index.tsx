import React, {InputHTMLAttributes} from 'react'
import {Input} from './style'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
}

const InputForm: React.FC <InputProps>=(props)=>{
    return(
        <Input {...props} />
    )
}
export default InputForm