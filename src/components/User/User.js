import React from 'react';

import css from "./User.module.css"


const User = ({user}) => {

    return (
        <div className={css.userDetails}>
            <h3>{user.id} {user.name}</h3>
            <p>{user.email}</p>
        </div>
    );
};

export {User}