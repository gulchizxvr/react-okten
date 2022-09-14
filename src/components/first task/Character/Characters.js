import {useState} from "react";
import CardInfo from "../cardInfo/CardInfo";
import './Characters.css'


export default function Characters () {
    let [characters,setCharacters]=useState([])

   fetch('https://rickandmortyapi.com/api/character')
       .then(value => value.json())
       .then(value => {
           setCharacters(value.results.splice(0,6))
       });
    return (
        <div className='card'>
            {characters.map((characters)=> (<CardInfo data={characters}/>))}
        </div>
    );
};

