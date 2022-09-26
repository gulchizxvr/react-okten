import React from 'react';

const Todo = ({todo}) => {
    return (
        <div>
            <p>id:{todo.id}<br/>{todo.title}</p>
            <h3>Completed: {(todo.completed).toString()}</h3>
        </div>
    );
};

export {Todo}