import React, {useState} from 'react'

const StateArrayModule = (props) => {
    const array = ['Hummingbird', 'Seagull','Blackbird','Penguin', 'Ostrich']
    const [birds, setBirds] = useState(array)
    const filterBirds = (e) => {
        setBirds(
            array.filter( bird => bird.toLowerCase().includes(e.target.value) )
        )
    }
    return(
        <div className="submodule">
            <h2>This module has an Array with birds in state</h2>
            <input type='text' placeholder='type to filter the birds' onInput={(filterBirds)} />
            <p>And the birds are:</p>
            {
                birds.map( bird => <li>{bird}</li>)
            }
        </div>
    )
}

export default StateArrayModule