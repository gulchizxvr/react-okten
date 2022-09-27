import React from 'react';
import {Comments} from "../../components";
import {Outlet} from "react-router-dom";

const CommentsPage = () => {
    return (
        <div>
            <Outlet/>
            <h2>All comments</h2>
            <Comments/>
        </div>
    );
};

export {CommentsPage}