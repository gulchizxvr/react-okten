import './CardInfo.css'

export default function CardInfo(props) {
    let {data:character} = props;
    return ((
        <div className={'character'}>
            <h3>{character.name}, {character.gender}, ID:{character.id}</h3>
            <p>
                Status: {character.status} <br/> species: {character.species} <br/>
            </p>
            <img src={character.image} alt={character.name}/>
        </div>
        )
    );
};

