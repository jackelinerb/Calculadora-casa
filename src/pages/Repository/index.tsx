import React from "react";
import { useLocation } from 'react-router'
import {Title, Text} from './style'
import ButtonForm from "../../componentes/button";
import { Link } from 'react-router-dom'

const Repository: React.FC = () => {

const location = useLocation<any>();
let area = location.state.TotalAlt * location.state.TotalLarg
let areaWindDoor = (location.state.TotalJan * 2 * 1.2) + (location.state.TotalPort * 0.8 *1.9)
let paintarea = area - areaWindDoor
let litrostinta = paintarea/5
let totalLitros = paintarea/5
let lata18 =0
let lata3 =0
let lata2 =0
let lata0=0
console.log(area, "area")
console.log(areaWindDoor, 'portaejanela')
console.log(litrostinta, "litrostinta")


if(litrostinta>18){
    lata18=Math.trunc(litrostinta/18)
    console.log(lata18, "lata18")
    litrostinta= litrostinta-(lata18*18)
    console.log(litrostinta, "litros18")
}
if(litrostinta>3.6){
    lata3=Math.trunc(litrostinta/3.6)
    console.log(lata3, "lata3")
    litrostinta= litrostinta-(lata3*3.6)
    console.log(litrostinta, "litros3")
}
if(litrostinta>2.5){
    lata2=Math.trunc(litrostinta/2.5)
    console.log(lata2, "lata2")
    litrostinta= litrostinta-(lata2*2.5)
    console.log(litrostinta, "litros2")
}
if(litrostinta>0.5){
    lata0=Math.trunc(litrostinta/0.5)
    console.log(lata0, "lata0")
    litrostinta= litrostinta-(lata0*0.5)
    console.log(litrostinta, "litros0")
}
if(litrostinta !== 0){
    lata0++
    litrostinta = litrostinta - 0.5
    console.log(lata0, "lata0")
    console.log(litrostinta, "litros0")
}

    return (
        <>
        <Title> Você irá precisar de {totalLitros} litros de tinta para pintar todas as paredes</Title>
        <Text> Você poderá comprar {lata18} lata de 18 litros, {lata3} lata de 3.6 litros, {lata2} lata de 2.5 litros e {lata0} lata de 0.5 litros</Text>
        <Link to= "/">
        <ButtonForm>Voltar</ButtonForm>
        </Link>
        </>
    )
};
export default Repository;