import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi"


import {userService} from "../../services";
import {userValidator} from "../../validators";

const UserForm = ({setUsers}) => {
    const {register, reset, handleSubmit, formState: {isValid, errors}} = useForm({
        mode: 'all',
 resolver: joiResolver(userValidator)
    });


    const submit =  async (object) => {
        const {data:newUser} = await userService.createUser(object)
        console.log(newUser);
        setUsers(users=>[...users, newUser])
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'Name & Surname'} {...register('name')}/>
            {errors.name && <span>{errors.name.message}</span>}
            <button disabled={!isValid}>Save</button>

        </form>

    );
}

export {UserForm};