import React, {useState} from 'react'
import { AiOutlineDelete } from "react-icons/ai"
import './ChecklistSubmodule.css'


const ChekclistSubmodule = (props) => {
    const [checked, setChecked] = useState(false)

    const checkMe = () => {
        setChecked(!checked)
    }
    return(
        <div className="submodule checklist-item">
            <li className={ checked ? 'checked' : '' }>{props.todo}</li>
            <AiOutlineDelete onClick={ () => props.remove( props.myNumber ) } />
            <input type="checkbox" onClick={checkMe} />
        </div>
    )
}

export default ChekclistSubmodule