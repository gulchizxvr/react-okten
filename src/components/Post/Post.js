import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import css from "./Post.module.css"
import {jsonService} from "../../service";

const Post = () => {
    const [comment,setComment] = useState(null)

    const {postId}=useParams();


    useEffect(()=> {
        jsonService.getPostById(postId).then(({data}) => setComment(data))
    },[postId])

    return (
        <div className={css.post_details}>
            <h2>Пост до якого прикріплений комент</h2>
            {JSON.stringify(comment)}
        </div>
    );
};

export  {Post}