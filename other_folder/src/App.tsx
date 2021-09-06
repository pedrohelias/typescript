import React, {FC,ChangeEvent, useState} from 'react';

import './App.css';
import Gerenciamento from './Components/gerenciamento';
import {Ilista} from "./Interface"






const App:FC = () => {

  const[ind, setInd] = useState<number>(0)
  const[qua, setQua] = useState<string>("")
  const[ava, setAva] = useState<number>(0)
  const[pont, setPont] = useState<number>(0)
  const[comen, setComen] = useState<string>("")
  const[status, setStatus] = useState<string>("")
  const[lista, setLista] = useState<Ilista[]>([])
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>):void => {

    if(event.target.name === "indice"){
      setInd(Number(event.target.value))
    }else if(event.target.name === "Qualificacao"){
      setQua(event.target.value)
    }else if(event.target.name === "Avaliacao"){
      setAva(Number(event.target.value))
    }else if(event.target.name === "Pontuacao"){
      setPont(Number(event.target.value))
    }else if(event.target.name === "Comentarios"){
      setComen(event.target.value)
    }else{
      setStatus(event.target.value)
    }
  }

  const addTask = ():void => {
    const newTask = {OBindice: ind,OBqualificacao: qua, OBavaliacao: ava, OBpontuacao: pont, OBcomentario: comen, OBstatus: status}
    setLista([...lista,newTask])
    console.log(lista)
    setAva(0)
    setComen("")
    setInd(0)
    setPont(0)
    setQua("")
    setStatus("")
    
  }

  const deleteLista = (variavel:string): void => {
    setLista(lista.filter((qua)=>{
      return qua.OBqualificacao != variavel
    }))
  }

  return (
    <div className="App">
      <div className="header">
        <div className="inputPart">
          <input type="number" name = "indice" placeholder="Índice" onChange={handleChange} value={ind}></input>
          <input type="text" name = "Qualificacao" placeholder="Qualificação" onChange={handleChange} value={qua} ></input>
          <input type="number" name = "Avaliacao" placeholder="Avaliação" onChange={handleChange} value={ava}></input>
          <input type="number" name = "Pontuacao" placeholder="Pontuação" onChange={handleChange} value={pont}></input>
          <input type="text" name = "Comentarios" placeholder="Comentários" onChange={handleChange} value={comen}></input>
          <input type="text" name = "Status" placeholder="Status" onChange={handleChange} value={status}></input>
        </div>
        <button onClick={addTask}>Enviar</button>
      </div>
      <div className="lista">
        {lista.map((lista:Ilista, key:number )=>{
          return <Gerenciamento key={key} lista={lista} deleteLista={deleteLista}></Gerenciamento> 
          
        })}
      </div>
    </div>
  );
}

export default App;
