import React, {useState} from 'react'
import RickMorty from '../files/rickmorty'
import Character from './Character'



const Characters = () => {

    const [characters, setCharacters] = useState(RickMorty.results)


    return(
        <div className="submodule">
            <h2>This module presents characters from rick and morty</h2>

            <div className="rickmorty">
            {
                characters.map(
                    //character, indeks
                    (c, i) =>  
                        <Character key={i} origin={c.origin.name} name={c.name} img={c.image} gender={c.gender} status={c.status} />
                    
                )
            }
            </div>
            
        </div>
    )
}

export default Characters