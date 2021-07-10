import React, { useState, FormEvent } from 'react';
import { Title, Form, Text, CheckBox } from './style';

const Dashboard: React.FC = () => {
  const [state, setState] = useState(
    {
      largura1:"",
      largura2:"",
      largura3:"",
      largura4:"",
      altura1:"",
      altura2:"",
      altura3:"",
      altura4:"",
      porta1: "",
      porta2: "",
      porta3: "",
      porta4: "",
      janela1:"",
      janela2:"",
      janela3:"",
      janela4:"",
    }
  )
  const [inputError, setInputError] = useState('');
  const [totalLarg, setTotalLarg] = useState<Number>();
  const [totalAlt, setTotalAlt]= useState<Number>();
  const [totalJan, setTotalJan]= useState<Number>();
  const [totalPort, setTotalPort] = useState<Number>()

  function handleAdd(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
    let totalLarg = parseFloat(state.largura1)+parseFloat(state.largura2)+parseFloat(state.largura3)+parseFloat(state.largura4)
    setTotalLarg(totalLarg)
    let totalAlt = parseFloat(state.altura1)+parseFloat(state.altura2)+parseFloat(state.altura3)+parseFloat(state.altura4)
    setTotalAlt(totalAlt)
    let totalPort = parseFloat(state.porta1)+parseFloat(state.porta2)+parseFloat(state.porta3)+parseFloat(state.porta4)
    setTotalPort(totalPort)
    let totalJan = parseFloat(state.janela1)+parseFloat(state.janela2)+parseFloat(state.janela3)+parseFloat(state.janela4)
    setTotalJan(totalJan)
  }

  return (
    <>
      <Title>
        Calcule quantas tintas você precisa para pintar a sua parede
      </Title>
      <Text> Parede 1</Text>
      <Form>
        <input
          placeholder="Largura"
          type='number'
          value={state.largura1}
          onChange={e => setState({...state, largura1:e.target.value})}
        />
        <input
          placeholder="Altura"
          value={state.altura1}
          type='number'
          onChange={e => setState({...state, altura1:e.target.value})}
        />
      </Form>
      <CheckBox>
        <input
          placeholder="Quantidade de portas"
          value={state.porta1}
          type='number'
          onChange={e => setState({...state, porta1:e.target.value})}
        />
        <input
          placeholder="Quantidade de janelas"
          value={state.janela1}
          type='number'
          onChange={e => setState({...state, janela1:e.target.value})}
        />
      </CheckBox>
      <Text> Parede 2</Text>
      <Form>
        <input
          type='number'
          placeholder="Largura"
          value={state.largura2}
          onChange={e => setState({...state, largura2:e.target.value})}
        />
        <input
          placeholder="Altura"
          value={state.altura2}
          type='number'
          onChange={e => setState({...state, altura2:e.target.value})}
        />
      </Form>
      <CheckBox>
        <input
          placeholder="Quantidade de portas"
          value={state.porta2}
          type='number'
          onChange={e => setState({...state, porta2:e.target.value})}
        />
        <input
          placeholder="Quantidade de janelas"
          value={state.janela2}
          type='number'
          onChange={e => setState({...state, janela2:e.target.value})}
        />
      </CheckBox>
      <Text> Parede 3</Text>
      <Form>
        <input
        type='number'
          placeholder="Largura"
          value={state.largura3}
          onChange={e => setState({...state, largura3:e.target.value})}
        />
        <input
          placeholder="Altura"
          value={state.altura3}
          type='number'
          onChange={e => setState({...state, altura3:e.target.value})}
        />
      </Form>
      <CheckBox>
        <input
          placeholder="Quantidade de portas"
          value={state.porta3}
          type='number'
          onChange={e => setState({...state, porta3:e.target.value})}
        />
        <input
          placeholder="Quantidade de janelas"
          value={state.janela3}
          type='number'
          onChange={e => setState({...state, janela3:e.target.value})}
        />
      </CheckBox>
      <Text> Parede 4</Text>
      <Form>
        <input
        type='number'
          placeholder="Largura"
          value={state.largura4}
          onChange={e => setState({...state, largura4:e.target.value})}
        />
        <input
          placeholder="Altura"
          value={state.altura4}
          type='number'
          onChange={e => setState({...state, altura4:e.target.value})}
        />
      </Form>
      <CheckBox>
        <input
          placeholder="Quantidade de portas"
          value={state.porta4}
          type='number'
          onChange={e => setState({...state, porta4:e.target.value})}
        />
        <input
          placeholder="Quantidade de janelas"
          value={state.janela4}
          type='number'
          onChange={e => setState({...state, janela4:e.target.value})}
        />
      </CheckBox>
      <Form onSubmit={handleAdd}>
        <button type="submit">Calcular</button>
      </Form>
    </>
  );
};
export default Dashboard;
