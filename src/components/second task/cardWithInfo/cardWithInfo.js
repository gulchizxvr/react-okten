import './cardWithInfo.css'

export default function CardWithInfo (props) {
    let {name,gender,image} = props
    return (
        <div className={'label'}>
            <h2>{name} - {gender}</h2>
            <img src={image} alt={image}/>
        </div>
    );
};

