import React from 'react'
import "./styles.css"

interface Props {

    status: string;
    setStatus: React.Dispatch<React.SetStateAction<string>>

}


const InputFieldStat:React.FC<Props> = ({status, setStatus}: Props) => {
    return (
        <form className="input">
        <input type="input" placeholder="Status" className="input__box" value={status}
        onChange={(e)=>setStatus(e.target.value)}></input>

    </form>
    )
}

export default InputFieldStat
