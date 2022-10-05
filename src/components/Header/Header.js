import React from 'react';
import {NavLink} from "react-router-dom";


import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.navBar}>
            <NavLink to={'/home'}>Home</NavLink>
            <NavLink to={'/users'}>Show users</NavLink>
            <NavLink to={'/posts'}>Show posts</NavLink>
            <NavLink to={'/comments'}>Show comment</NavLink>
        </div>
    );
};

export  {Header}