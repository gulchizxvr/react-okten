import React from 'react';

import {Comments} from "../../components";
import css from "./CommentPage.module.css"

const CommentsPage = () => {
    return (
        <div className={css.commentPage}>
            <h2>Comments</h2>
            <Comments/>
        </div>
    );
};

export {CommentsPage}