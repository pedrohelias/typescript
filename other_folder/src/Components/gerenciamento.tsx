import React from 'react';
import { ListFormat } from 'typescript';
import {Ilista} from  "../Interface"

//utilizar a props para colher o tipo de cada variavel 
interface Props{
    lista:Ilista;
    deleteLista(variavel: string): void;
    
}


const Gerenciamento = ({lista, deleteLista}: Props) => {

    return(
        <div className="task">
            <div className="content">
                <span>{lista.OBindice}</span>
                <span>{lista.OBqualificacao}</span>
                <span>{lista.OBavaliacao}</span>
                <span>{lista.OBpontuacao}</span>
                <span>{lista.OBcomentario}</span>
                <span>{lista.OBstatus}</span>
            </div>
            <button onClick={()=>{deleteLista(lista.OBqualificacao)}}>X</button>        
        </div>)
}


export default Gerenciamento;