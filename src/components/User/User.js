import React from 'react';

const User = ({user,getId}) => {

    return (
        <div>
            <h2>{user.id} - {user.name}</h2>
            <button onClick={ ()=> getId(user.id)}>All posts</button>
        </div>
    );
};

export {User}