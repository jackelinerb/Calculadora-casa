import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router';
import { isNonNullExpression } from 'typescript';
import ButtonForm from '../../componentes/button';
import InputForm from '../../componentes/input';
import { Title, Form, Text, CheckBox, Error } from './style';

const Dashboard: React.FC = () => {
  const [state, setState] = useState({
    largura1: 0,
    largura2: 0,
    largura3: 0,
    largura4: 0,
    altura1: 0,
    altura2: 0,
    altura3: 0,
    altura4: 0,
    porta1: 0,
    porta2: 0,
    porta3: 0,
    porta4: 0,
    janela1: 0,
    janela2: 0,
    janela3: 0,
    janela4: 0,
  });
  const janela = [2, 1.2];
  const porta = [0.8, 1.9];
  const [inputError, setInputError] = useState('');
  const [totalLarg, setTotalLarg] = useState<Number>(0);
  const [totalAlt, setTotalAlt] = useState<Number>(0);
  const [totalJan, setTotalJan] = useState<Number>(0);
  const [totalPort, setTotalPort] = useState<Number>(0);
  const history = useHistory();

  const changeWidth1 = (event: any) => {
    setState({ ...state, largura1: event.target.value });
  };
  const changeWidth2 = (event: any) => {
    setState({ ...state, largura2: event.target.value });
  };
  const changeWidth3 = (event: any) => {
    setState({ ...state, largura3: event.target.value });
  };
  const changeWidth4 = (event: any) => {
    setState({ ...state, largura4: event.target.value });
  };
  const changeHeight1 = (event: any) => {
    setState({ ...state, altura1: event.target.value });
  };
  const changeHeight2 = (event: any) => {
    setState({ ...state, altura2: event.target.value });
  };
  const changeHeight3 = (event: any) => {
    setState({ ...state, altura3: event.target.value });
  };
  const changeHeight4 = (event: any) => {
    setState({ ...state, altura4: event.target.value });
  };
  const changeWind1 = (event: any) => {
    setState({ ...state, janela1: event.target.value });
  };
  const changeWind2 = (event: any) => {
    setState({ ...state, janela2: event.target.value });
  };
  const changeWind3 = (event: any) => {
    setState({ ...state, janela3: event.target.value });
  };
  const changeWind4 = (event: any) => {
    setState({ ...state, janela4: event.target.value });
  };
  const changeDoor1 = (event: any) => {
    setState({ ...state, porta1: event.target.value });
  };
  const changeDoor2 = (event: any) => {
    setState({ ...state, porta2: event.target.value });
  };
  const changeDoor3 = (event: any) => {
    setState({ ...state, porta3: event.target.value });
  };
  const changeDoor4 = (event: any) => {
    setState({ ...state, porta4: event.target.value });
  };

  function areaWindDoor(door: number, wind: number) {
    let result: number =
      door * porta[0] * porta[1] + wind * janela[0] * janela[1];
    return result;
  }
  function areaWall(width: number, height: number) {
    let result: number = width * height;
    return result;
  }
  function totalVariable(a: number, b: number, c: number, d: number) {
    let result: number = Number(a) + Number(b) + Number(c) + Number(d);
    return result;
  }

  function handleAdd(event: FormEvent<HTMLFormElement>) {
    setInputError('');
    event.preventDefault();
    let areaportjan1 = areaWindDoor(state.porta1, state.janela1);
    let areaparede1 = areaWall(state.largura1, state.altura1);
    let areaportjan2 = areaWindDoor(state.porta2, state.janela2);
    let areaparede2 = areaWall(state.largura2, state.altura2);
    let areaportjan3 = areaWindDoor(state.porta3, state.janela3);
    let areaparede3 = areaWall(state.largura3, state.altura3);
    let areaportjan4 = areaWindDoor(state.porta4, state.janela4);
    let areaparede4 = areaWall(state.largura4, state.altura4);

    if (
      !state.largura1 ||
      !state.largura2 ||
      !state.largura3 ||
      !state.largura4
    ) {
      console.log("larguras")
      setInputError(
        'Digite todas as larguras. Nenhuma largura pode ter menos do que 1m',
      );
    } else if (
      !state.altura1 ||
      !state.altura2 ||
      !state.altura3 ||
      !state.altura4
    ) {
      console.log("alturas")
      setInputError(
        'Digite todas as alturas.Nenhuma altura pode ter menos do que 1m',
      );
    } else if (
      state.largura1 < 1 ||
      state.largura2 < 1 ||
      state.largura3 < 1 ||
      state.largura4 < 1
    ) {
      console.log("largura 1m")
      setInputError('Nenhuma largura pode ter menos do que 1m');
    } else if (
      state.altura1 < 1 ||
      state.altura2 < 1 ||
      state.altura3 < 1 ||
      state.altura4 < 1
    ) {
      console.log("altura 1m")
      setInputError('Nenhuma altura pode ter menos do que 1m');
    }
     else if (
      state.altura1 > 15 ||
      state.altura2 > 15 ||
      state.altura3 > 15 ||
      state.altura4 > 15
    ) {
      console.log("altura 15m")
      setInputError('Nenhuma altura pode ter mais do que 15m');
    } else if (
      state.largura1 > 15 ||
      state.largura2 > 15 ||
      state.largura3 > 15 ||
      state.largura4 > 15
    ) {
      console.log("largura 15m")
      setInputError('Nenhuma largura pode ter mais do que 15m');
    } else if (
      (state.altura1 < 2.2 && state.porta1 > 0) ||
      (state.altura2 < 2.2 && state.porta2 > 0) ||
      (state.altura3 < 2.2 && state.porta3 > 0) ||
      (state.altura4 < 2.2 && state.porta4 > 0)
    ) {
      console.log("30cm")
      setInputError(
        'A altura da parede precisa ser, no mínimo, 30cm maior do que a porta',
      );
    } else if (
      (state.porta1 > 0 && (areaparede1 - areaportjan1 < areaparede1 / 2) )||
      (state.porta2 > 0 && (areaparede2 - areaportjan2 < areaparede2 / 2))||
      (state.porta3 > 0 && (areaparede3 - areaportjan3 < areaparede3 / 2))||
      (state.porta4 > 0 && (areaparede4 - areaportjan4 < areaparede4 / 2)) ||
      (state.janela1 > 0 && (areaparede1 - areaportjan1 < areaparede1 / 2))||
      (state.janela2 > 0 && (areaparede2 - areaportjan2 < areaparede2 / 2))||
      (state.janela3 > 0 && (areaparede3 - areaportjan3 < areaparede3 / 2))||
      (state.janela4 > 0 && (areaparede4 - areaportjan4 < areaparede4 / 2))
    ) {
      console.log('50%')

        setInputError(
          'Area da porta + area da janela da parede não pode ser maior do que 50% da area total da parede ',
        );
    }
    else{
      let totalLarg = totalVariable(
        state.largura1,
        state.largura2,
        state.largura3,
        state.largura4,
      );
      setTotalLarg(totalLarg);
      let totalAlt = totalVariable(
        state.altura1,
        state.altura2,
        state.altura3,
        state.altura4,
      );
      setTotalAlt(totalAlt);
      let totalPort= totalVariable(
        state.porta1,
        state.porta2,
        state.porta3,
        state.porta4,
      );
      setTotalPort(totalPort);
      let totalJan = totalVariable(
        state.janela1,
        state.janela2,
        state.janela3,
        state.janela4,
      );
      setTotalJan(totalJan);
      return history.push({
        pathname: '/Repository',
        state: {
          TotalAlt: totalAlt,
          TotalLarg: totalLarg,
          TotalJan: totalJan,
          TotalPort: totalPort,
        },
      });
    }
  }

  return (
    <>
      <Title>
        Calcule quantas tintas você precisa para pintar a sua parede
      </Title>
      <Text> Parede 1</Text>
      <Form>
        <InputForm
          name="Largura1"
          placeholder="Largura"
          type="number"
          min="0"
          value={state.largura1 !== 0 ? state.largura1 : ''}
          onChange={changeWidth1}
        />
        <InputForm
          name="Altura1"
          placeholder="Altura"
          min="0"
          value={state.altura1 !== 0 ? state.altura1 : ''}
          type="number"
          onChange={changeHeight1}
        />
      </Form>
      <CheckBox>
        <InputForm
          name="QtdPorta1"
          placeholder="Quantidade de portas"
          min="0"
          value={state.porta1 !== 0 ? state.porta1 : ''}
          type="number"
          onChange={changeDoor1}
        />
        <InputForm
          name="QtdJanela1"
          placeholder="Quantidade de janelas"
          min="0"
          value={state.janela1 !== 0 ? state.janela1 : ''}
          type="number"
          onChange={changeWind1}
        />
      </CheckBox>
      <Text> Parede 2</Text>
      <Form>
        <InputForm
          name="Largura2"
          type="number"
          min="0"
          placeholder="Largura"
          value={state.largura2 !== 0 ? state.largura2 : ''}
          onChange={changeWidth2}
        />
        <InputForm
          name="Altura2"
          placeholder="Altura"
          min="0"
          value={state.altura2 !== 0 ? state.altura2 : ''}
          type="number"
          onChange={changeHeight2}
        />
      </Form>
      <CheckBox>
        <InputForm
          name="QtdPorta2"
          placeholder="Quantidade de portas"
          value={state.porta2 !== 0 ? state.porta2 : ''}
          min="0"
          type="number"
          onChange={changeDoor2}
        />
        <InputForm
          name="QtdJanela2"
          placeholder="Quantidade de janelas"
          value={state.janela2 !== 0 ? state.janela2 : ''}
          min="0"
          type="number"
          onChange={changeWind2}
        />
      </CheckBox>
      <Text> Parede 3</Text>
      <Form>
        <InputForm
          name="Largura3"
          type="number"
          placeholder="Largura"
          min="0"
          value={state.largura3 !== 0 ? state.largura3 : ''}
          onChange={changeWidth3}
        />
        <InputForm
          name="Altura3"
          placeholder="Altura"
          value={state.altura3 !== 0 ? state.altura3 : ''}
          type="number"
          onChange={changeHeight3}
        />
      </Form>
      <CheckBox>
        <InputForm
          name="QtdPorta3"
          placeholder="Quantidade de portas"
          min="0"
          value={state.porta3 !== 0 ? state.porta3 : ''}
          type="number"
          onChange={changeDoor3}
        />
        <InputForm
          name="QtdJanela3"
          placeholder="Quantidade de janelas"
          value={state.janela3 !== 0 ? state.janela3 : ''}
          min="0"
          type="number"
          onChange={changeWind3}
        />
      </CheckBox>
      <Text> Parede 4</Text>
      <Form>
        <InputForm
          name="Largura4"
          type="number"
          min="0"
          placeholder="Largura"
          value={state.largura4 !== 0 ? state.largura4 : ''}
          onChange={changeWidth4}
        />
        <InputForm
          name="Altura4"
          placeholder="Altura"
          value={state.altura4 !== 0 ? state.altura4 : ''}
          min="0"
          type="number"
          onChange={changeHeight4}
        />
      </Form>
      <CheckBox>
        <InputForm
          name="QtdPorta4"
          placeholder="Quantidade de portas"
          value={state.porta4 !== 0 ? state.porta4 : ''}
          min="0"
          type="number"
          onChange={changeDoor4}
        />
        <InputForm
          name="QtdJanela4"
          placeholder="Quantidade de janelas"
          value={state.janela4 !== 0 ? state.janela4 : ''}
          min="0"
          type="number"
          onChange={changeWind4}
        />
      </CheckBox>
      {inputError && <Error>{inputError}</Error>}
      <Form onSubmit={handleAdd}>
        <ButtonForm type="submit">Calcular</ButtonForm>
      </Form>
    </>
  );
};
export default Dashboard;
