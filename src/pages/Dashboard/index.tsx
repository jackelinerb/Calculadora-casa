import React from "react";
import {Title, Form, Text, CheckBox} from './style'

const Dashboard: React.FC = () => {
    return(
        <>
        <Title>Calcule quantas tintas você precisa para pintar a sua parede</Title>
        <Text> Parede 1</Text>
        <Form>
            <input placeholder="Largura"/>
            <input placeholder="Altura"/>
        </Form>
        <CheckBox>
            <input type="checkbox" id="porta" name="porta"/>
            <label >Tem porta?</label>
            <input placeholder="Quantidade de portas"/>
            <input type="checkbox" id="janela" name="Janela"/>
            <label >Tem janela?</label>
            <input placeholder="Quantidade de janelas"/>
        </CheckBox>
        <Text> Parede 2</Text>
        <Form>
            <input placeholder="Largura"/>
            <input placeholder="Altura"/>
        </Form>
        <CheckBox>
            <input type="checkbox" id="porta" name="porta"/>
            <label >Tem porta?</label>
            <input placeholder="Quantidade de portas"/>
            <input type="checkbox" id="janela" name="Janela"/>
            <label >Tem janela?</label>
            <input placeholder="Quantidade de janelas"/>
        </CheckBox>
        <Text> Parede 3</Text>
        <Form>
            <input placeholder="Largura"/>
            <input placeholder="Altura"/>
        </Form>
        <CheckBox>
            <input type="checkbox" id="porta" name="porta"/>
            <label >Tem porta?</label>
            <input placeholder="Quantidade de portas"/>
            <input type="checkbox" id="janela" name="Janela"/>
            <label >Tem janela?</label>
            <input placeholder="Quantidade de janelas"/>
        </CheckBox>
        <Text> Parede 4</Text>
        <Form>
            <input placeholder="Largura"/>
            <input placeholder="Altura"/>
        </Form>
        <CheckBox>
            <input type="checkbox" id="porta" name="porta"/>
            <label >Tem porta?</label>
            <input placeholder="Quantidade de portas"/>
            <input type="checkbox" id="janela" name="Janela"/>
            <label >Tem janela?</label>
            <input placeholder="Quantidade de janelas"/>
        </CheckBox>
        <Form>
            <button type="submit">Calcular</button>
        </Form>
        </>
    ) 
};
export default Dashboard;