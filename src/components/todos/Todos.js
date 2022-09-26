import React, {useEffect, useState} from 'react';

import {jsonService} from "../../service";
import {Todo} from "../todo/Todo";




const Todos = () => {

    const [todos,setTodos] = useState([])

    useEffect(()=>{
        jsonService.getTodos().then(({data})=> setTodos(data))
    },[])

    return (
        <div>
            Останні 20 туду
            {todos.map(todo=><Todo key={todo.id} todo={todo}/>)}

        </div>
    );
};

export {Todos}