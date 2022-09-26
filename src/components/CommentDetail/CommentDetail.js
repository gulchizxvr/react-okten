import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {jsonService} from "../../service";

const CommentDetail = () => {
    const [comment,setComment] = useState(null)

    const {state} = useLocation()

    const {postId}=useParams();
    console.log(postId);

    useEffect(()=> {

    if (state) {
        setComment(state)
    } else {
        jsonService.getCommentById(postId).then(({data}) => setComment(data))
    }},[postId,state])

    return (
        <div>
            {JSON.stringify(comment)}
        </div>
    );
};

export  {CommentDetail}