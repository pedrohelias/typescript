import React, { ChangeEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';
import InputFieldaAvali from './components/InputFieldaAvali';
import InputFieldComen from './components/InputFieldComen';
import InputFieldPont from './components/InputFieldPont';
import InputFieldQuali from './components/InputFieldQuali';
import InputFieldStat from './components/InputFieldStat';
import { coletaDados } from './components/model';
import { isDefaultClause } from 'typescript';
import Gerenciamento from './components/Gerenciamento';


const App: React.FC = () => { //adicionada a tipagem do typescript

  const termo:number = 10;

  const [indice, setIndice] = useState<string>(""); //setando as variaveis de alteração de estado
  const [avaliacao, setAvaliacao] = useState<string>("");
  const [comentario, setComentario] = useState<string>("");
  const [pontuacao, setPontuacao] = useState<string>("");
  const [qualificacao, setQualificacao] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [lista, setLista] = useState<coletaDados[]>([])
  
  //const [todo, setTodo] = useState<string>(""); 
  //const [todos, setTodos] = useState<coletaDados[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>):void => {

    if(event.target.name === "indice"){
      setIndice(event.target.value)
    }else if(event.target.name === "Qualificacao"){
      setQualificacao(event.target.value)
    }else if(event.target.name === "Avaliacao"){
      setAvaliacao(event.target.value)
    }else if(event.target.name === "Pontuacao"){
      setPontuacao(event.target.value)
    }else if(event.target.name === "Comentarios"){
      setComentario(event.target.value)
    }else{
      setStatus(event.target.value)
    }
  }

  const getRandom = (termo:number) => {
    return Math.floor(Math.random() * termo + 1)
}


  const handleAdd = ():void => {
    const novoNumero: number = Math.floor(Math.random() * 100000)
    const novoIndice = "#" + novoNumero.toString()
    const newItem = {OBindice: novoIndice,OBqualificacao: qualificacao, OBavaliacao: avaliacao, OBpontuacao: pontuacao, OBcomentario: comentario, OBstatus: status}

    setLista([...lista, newItem])
    console.log(lista)
    setAvaliacao("")
    setComentario("")
    setIndice("")
    setPontuacao("")
    setQualificacao("")
    setStatus("")
    
  }

  const deleteLista = (variavel:string): void => {
    setLista(lista.filter((indice)=>{
      return indice.OBindice!= variavel
    }))
  }

  const editarLista = () => {

  }
 


  return (
    <div className="App" onSubmit={handleAdd}>
      <span className="heading">teste 2</span>
      {/* <InputField indice = {indice} setIndice = {setIndice} ></InputField> */}
      <InputFieldaAvali avaliacao = {avaliacao} setAvaliacao = {setAvaliacao}></InputFieldaAvali>
      <InputFieldComen comentario = {comentario} setComentario = {setComentario}></InputFieldComen>
      <InputFieldPont pontuacao = {pontuacao} setPontuacao = {setPontuacao}></InputFieldPont>
      <InputFieldQuali qualificacao = {qualificacao} setQualificacao={setQualificacao}></InputFieldQuali>
      <InputFieldStat status={status} setStatus={setStatus}></InputFieldStat>

      <button className="input__submit" type="submit" onClick = {handleAdd} >vai</button>

      <div className="lista">
        {lista.map((lista:coletaDados, key:number )=>{
          return <Gerenciamento key={key} lista={lista} deleteLista={deleteLista} ></Gerenciamento> 
          
        })}
      </div>

    </div>
  );
}

export default App;
