import React from 'react';

import css from "./Post.module.css"

const Post = ({post}) => {
    return (
        <div className={css.postDetails}>
            <h3>Post --- {post.title}</h3>
            <p>User ID - {post.userId}</p>
        </div>
    );
};

export {Post}