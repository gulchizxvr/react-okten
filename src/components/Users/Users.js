import React, {useEffect, useState} from 'react';


import {userService} from "../../services";
import User from "../User/User";

const Users = ({getId}) => {

    const [users,setUsers] = useState([]);
     useEffect(()=> {
         userService.getAll.then(({data})=> setUsers(data))
     },[])

    return (
        <div>
            {users.map(user=> <User key={user.id} user={user} getId={getId}/>)}
        </div>
    );
};

export {Users}