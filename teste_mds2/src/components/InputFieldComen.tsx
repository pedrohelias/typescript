import React from 'react'
import "./styles.css"


interface Props{

    comentario: string;
    setComentario: React.Dispatch<React.SetStateAction<string>>;


}



const InputFieldComen:React.FC<Props> = ({comentario,setComentario}: Props) => {
    return (
        <form className="input">
           <input type="input" placeholder="Comentário" className="input__box"
           value={comentario}
           onChange={(e)=>setComentario(e.target.value)}
           name = "Comentarios"
           ></input>

       </form>
    )
}

export default InputFieldComen
