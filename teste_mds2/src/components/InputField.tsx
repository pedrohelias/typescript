import React from 'react'
import "./styles.css"

//INDICE
interface Props{
    indice: string;
    setIndice: React.Dispatch<React.SetStateAction<string>>



}

const InputField = ({indice,setIndice}:Props) => {
    return (
       <form className="input">
           <input type="input" placeholder="Índice" className="input__box"
           value={indice}
           onChange={(e)=>setIndice(e.target.value)}
           ></input>

       </form>
    )
}

export default InputField
