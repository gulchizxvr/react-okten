import React from 'react';

import css from "./Comment.module.css"

const Comment = ({comment}) => {
    return (
        <div className={css.commentDetails}>
            <h3>{comment.id}</h3>
            <p>Body:{comment.body}</p>
        </div>
    );
};

export {Comment}