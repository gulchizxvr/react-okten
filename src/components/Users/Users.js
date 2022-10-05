import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {jsonService} from "../../services/json.service";
import {User} from "../User/User";


const Users = () => {

    let state = useSelector(state => state)
    let dispatch = useDispatch()

    useEffect(()=> {
        jsonService.getUser().then(({data})=> {
            dispatch({type:'loadUsers', payload:data})
        } )
    },[])


    return (
        <div>
            {state.usersReducer.users.map(user=> <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users}