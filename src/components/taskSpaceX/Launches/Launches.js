import React, {useEffect, useState} from 'react';
import {getLaunches} from "../../services/spacexdata.api.services";
import Launch from "../Launch/Launch";

export default function Launches() {

        let [launches, setLaunches] = useState([])

        useEffect(() => {
            getLaunches().then((array) => setLaunches(array))
        })


        return (

            <div>
                {launches.filter(({launch_year}) => launch_year!=='2020').map((launch, index) => (<Launch item={launch} key={index}/>))}

            </div>
        );
}

