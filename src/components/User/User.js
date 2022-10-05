import React from 'react';
import {useNavigate} from "react-router-dom";

const User = ({user}) => {

    return (
        <div>
            <h3>{user.name}</h3>
        </div>
    );
};

export {User}