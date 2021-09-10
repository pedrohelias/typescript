import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';
import InputFieldaAvali from './components/InputFieldaAvali';
import InputFieldComen from './components/InputFieldComen';
import InputFieldPont from './components/InputFieldPont';
import InputFieldQuali from './components/InputFieldQuali';
import InputFieldStat from './components/InputFieldStat';


const App: React.FC = () => { //adicionada a tipagem do typescript

  const [indice, setIndice] = useState<string>(""); //setando as variaveis de alteração de estado
  const [avaliacao, setAvaliacao] = useState<string>("");
  const [comentario, setComentario] = useState<string>("");
  const [pontuacao, setPontuacao] = useState<string>("");
  const [qualificacao, setQualificacao] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  
  console.log(indice)
  console.log(avaliacao)
  console.log(comentario)
  console.log(pontuacao)
  console.log(qualificacao)
  console.log(status)

  return (
    <div className="App">
      <span className="heading">teste 2</span>
      <InputField indice = {indice} setIndice = {setIndice}></InputField>
      <InputFieldaAvali avaliacao = {avaliacao} setAvaliacao = {setAvaliacao}></InputFieldaAvali>
      <InputFieldComen comentario = {comentario} setComentario = {setComentario}></InputFieldComen>
      <InputFieldPont pontuacao = {pontuacao} setPontuacao = {setPontuacao}></InputFieldPont>
      <InputFieldQuali qualificacao = {qualificacao} setQualificacao={setQualificacao}></InputFieldQuali>
      <InputFieldStat status={status} setStatus={setStatus}></InputFieldStat>

      <button className="input__submit" type="submit">vai</button>

    </div>
  );
}

export default App;
