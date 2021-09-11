import React from 'react'
import "./styles.css"


interface Props{

    avaliacao: string;
    setAvaliacao: React.Dispatch<React.SetStateAction<string>>;


}


const InputFieldaAvali:React.FC<Props> = ({avaliacao,setAvaliacao}: Props) => {
    return (
        <form className="input">
            
                <input type="input" placeholder="Avaliação" className="input__box"
                value={avaliacao}
                onChange={(e)=>setAvaliacao(e.target.value)}
                name = "Avaliacao"
                ></input>
           
       </form>
    )
}

export default InputFieldaAvali
