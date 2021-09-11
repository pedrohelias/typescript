import React from 'react';
import { ListFormat } from 'typescript';
import {coletaDados} from  "./model"
import "./styles.css"
import {BrowserRouter, useHistory} from "react-router-dom"

//utilizar a props para colher o tipo de cada variavel 
interface Props{
    lista:coletaDados;
    deleteLista(variavel: string): void;
    
}



const Gerenciamento = ({lista, deleteLista}: Props) => {

    const history = useHistory();

    const handleClickNovaPagina = () => {

      history.push(`/${lista.OBindice}`)
    
    }


    return(
        <div className="teste">
            <div >
                

            <table>
            <thead>
                <tr>
                    <th>Índice</th>
                    <th>Qualificação</th>
                    <th>Avaliacao</th>
                    <th>Pontuacao</th>
                    <th>Comentario</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{lista.OBindice}</td>
                    <td>{lista.OBqualificacao}</td>
                    <td>{lista.OBavaliacao}</td>
                    <td>{lista.OBpontuacao}</td>
                    <td>{lista.OBcomentario}</td>
                    <td>{lista.OBstatus}</td>
                </tr>
               
            </tbody>
        </table>

        <button onClick={()=>{deleteLista(lista.OBindice)}} className="teste2">apagar</button>  
        <button className="teste2">editar</button>
        <button className="PaginaNova" onClick={handleClickNovaPagina}>novaPagina</button>
            </div>
                  
        </div>)
}


export default Gerenciamento;