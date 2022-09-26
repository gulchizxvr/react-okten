import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {
    return (
        <div>
            <h2>Навігація</h2>
            <div className={css.navigator}>
                <NavLink to={'/todos'}>Todos</NavLink>
                <NavLink to={'/albums'}>Albums</NavLink>
                <NavLink to={'/comments'}>Comments</NavLink>
            </div>
        </div>
    );
};

export {Header}