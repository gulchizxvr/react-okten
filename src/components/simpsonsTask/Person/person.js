import './person.css'

export default function Person(props) {
    let {data} = props
    return (
        <div className={'person'}>
            <div className={'text'}>
                <h2>{data.name} {data.surname} {data.age} years old</h2>
                <p>{data.info}</p>
            </div>
            <div className={'image'}>
                <img src={data.photo} alt={data.name}/>
            </div>

            </div>

    );
};
