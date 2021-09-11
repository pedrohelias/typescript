import React from 'react'
import "./styles.css"

interface Props{
    pontuacao: string;
    setPontuacao: React.Dispatch<React.SetStateAction<string>>;
}

const InputFieldPont:React.FC<Props> = ({pontuacao, setPontuacao}: Props) => {
    return (
        <form className="input">
        <input type="input" placeholder="Pontuação" className="input__box" value={pontuacao} 
        onChange={(e)=>setPontuacao(e.target.value)}
        name = "Pontuacao"
        ></input>

    </form>
    )
}

export default InputFieldPont
