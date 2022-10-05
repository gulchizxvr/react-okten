import React from 'react';

import css  from "./PostPage.module.css"
import {Posts} from "../../components";

const PostsPage = () => {
    return (
        <div className={css.postsPage}>
            <h2>Posts</h2>
            <Posts/>
        </div>
    );
};

export {PostsPage}