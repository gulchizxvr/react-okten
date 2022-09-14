import {simpsons} from "../data/data";
import Person from "../Person/person";

export default function Family () {

    return (
        simpsons.map(simpson => <Person data={simpson}/>)
    );
};
