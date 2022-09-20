import React, {useEffect, useState} from 'react';
import {getLaunches} from "../../services";
import {Launch} from "../../taskSpaceX";


export function Launches() {

        let [launches, setLaunches] = useState([])

        useEffect(() => {
           getLaunches().then((object) => setLaunches(object.data))
        },[])


        return (

            <div>
                {launches.filter(({launch_year}) => launch_year!=='2020').map((launch) => (<Launch item={launch} key={launch.flight_number}/>))}

            </div>
        );
}

