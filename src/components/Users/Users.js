import React, {useEffect, useState} from 'react';

import {userService} from "../../services";
import {User} from "../User/User";
import {UserForm} from "../UserFrom/UserForm";

const Users = () => {

    const [users,setUsers] = useState([]);
    useEffect(()=> {
        userService.getAllUser().then(({data})=>setUsers(data))
    },[])


    return (

        <div>
            <h2>Додати юзера</h2>
            <div><UserForm setUsers={setUsers}/></div>

            <div>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
        </div>
    );
};

export {Users}