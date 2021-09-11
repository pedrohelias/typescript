import React from 'react'
import { useHistory, useParams } from 'react-router-dom';



const PaginaMenu = () => {
    const params = useParams()

    const history = useHistory()

    const handleBackPage = () => {
        history.goBack()
    }

    console.log(params)

    return (
        <div>
            
            <button onClick={handleBackPage}>voltar</button>
            <h2>{JSON.stringify(params)}</h2>
            
        </div>
    )
}

export default PaginaMenu;
