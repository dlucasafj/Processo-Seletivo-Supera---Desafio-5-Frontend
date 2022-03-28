import styled from "styled-components";
import api from "../api/api";
import { useState } from "react";
import { useEffect } from "react";
import TableComponents from "../components/TableComponent";

export const ExtratoScreen = () => {
  const [operador, setOperador] = useState("");
  const [data_ini, setData_ini] = useState("");
  const [data_fim, setData_fim] = useState("");
  const [val_total, setValor_total] = useState(0);
  const [transf, setTrasnf] = useState([]);
const [dados_filtros, setDados_filtros] = useState([])

  const transacao = () => {
    if(!data_ini && !data_fim && !operador){
        api.get(`/transferencia`).then((response) => {
            setTrasnf(response.data);
            console.log(transf)
           });
    }else if(data_ini && !data_fim && !operador){ // somente filtro data inicial
        api.get(`/transferencia/busca?data_ini=${data_ini}`).then((response) => {
         setDados_filtros(response.data);
        }); 
    }else if(!data_ini && data_fim && !operador){ // somente filtro data final
        api.get(`/transferencia/busca?data_ini=${data_fim}`).then((response) => {
            setDados_filtros(response.data);
          }); 
    }else if(data_ini && data_fim && !operador){
        api.get(`/transferencia/busca_periodo?data_inicial=${data_ini}&data_fim=${data_fim}`).then((response) => {
            setDados_filtros(response.data);
          })
    }else if(!data_ini && !data_fim && operador){
        api.get(`/transferencia/busca_operador?operador=${operador}`).then((response) => {
            setDados_filtros(response.data);
          })
    }else {
        api.get(`/transferencia/busca_total?data_inicial=${data_ini}&data_fim=${data_fim}&operador=${operador}`).then((response) => {
            setDados_filtros(response.data);
          })
    }
  };

  useEffect(()=>{
    
  },[])

  console.log(transf)
  return (
    <Container>
      <FiltroGrup className="filtros">
        <Group>
          <label>Data inicial</label>
          <input
            name="data_inicial"
            value={data_ini}
            type="date"
            onChange={(e) => {
              setData_ini(e.target.value);
            }}
          ></input>
        </Group>
        <Group>
          <label>Data Final</label>
          <input
            name="data_fim"
            value={data_fim}
            type="date"
            onChange={(e) => {
              setData_fim(e.target.value);
            }}
          ></input>
        </Group>
        <Group>
          <label>Nome Operador</label>
          <input
            name="operador"
            value={operador}
            type="text"
            onChange={(e) => {
              setOperador(e.target.value);
            }}
          ></input>
        </Group>
      </FiltroGrup>
      <ButtonContainer>
        <Button onClick={transacao}>Pesquisar</Button>
      </ButtonContainer>
      <TableComponents dados={transf}></TableComponents>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  margin-top: 35px;
  margin-right: 20px;
  padding: 15px;
`;
const FiltroGrup = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;

  > label {
    margin-bottom: 5px;
  }

  > input {
    height: 35px;
    padding: 2px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  margin: 15px;
`;
const Button = styled.button`
  background: #272425;
  border-radius: 3px;
  border: 2px solid #272425;
  color: #fff;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  cursor: pointer;

  :hover {
    background: #4b4547;
  }
`;
