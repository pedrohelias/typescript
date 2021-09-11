import React from 'react'
import "./styles.css"

interface Props{

    qualificacao: string;
    setQualificacao: React.Dispatch<React.SetStateAction<string>>

}


const InputFieldQuali:React.FC<Props> = ({qualificacao, setQualificacao}: Props) => {
    return (
        <form className="input">
        <input type="input" placeholder="Qualificação" className="input__box"
        value={qualificacao}
        onChange={(e)=>setQualificacao(e.target.value)}
        name = "Qualificacao"
        ></input>

    </form>
    )
}

export default InputFieldQuali
