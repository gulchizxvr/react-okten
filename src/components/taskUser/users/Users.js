import {useEffect, useState} from "react";


import {InfoUser} from "../../taskUser";
import {User} from "../../taskUser";

import {getUsers} from "../../services";




export default function Users() {

    const info = (object) => {
        setUser(object)
    };

    let [users, setUsers] = useState([])
    let [user, setUser] = useState(null)

    useEffect(() => {
        getUsers().then(users => setUsers(users.data))
    },[])

    return (<div>
        {user? <InfoUser item={user}/> : null}

        {users.map((user, index) =>
            (<User item={user} key={index} info={info}/>))}

    </div>)
}




