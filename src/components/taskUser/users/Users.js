import {useEffect, useState} from "react";

import User from "../user/User";
import InfoUser from "../infoUser/InfoUser";

import {getUser} from "../../services/user.api.services";


export default function Users() {

    const info = (object) => {
        setUser(object)
    };

    let [users, setUsers] = useState([])
    let [user, setUser] = useState(null)

    useEffect(() => {
        getUser().then(users => setUsers(users))
    })

    return (<div>
        {user? <InfoUser item={user}/> : null}

        {users.map((user, index) =>
            (<User item={user} key={index} info={info}/>))}

    </div>)
}




