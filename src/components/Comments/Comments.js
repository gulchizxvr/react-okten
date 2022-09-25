import React, {useEffect, useState} from 'react';

import {userService} from "../../services";
import Comment from "../Comment/Comment";
import CommentForm from "../CommentForm/CommentForm";

const Comments = () => {
   const [comments,setComments] = useState([]);

   useEffect(()=>{
       userService.getAllComments().then(({data})=>{setComments(data)})
    },[])


    return (
        <div>
            <h2>Додати коментар</h2>
            <CommentForm setComments={setComments}/>
            <p>Останні 5 коментарів</p>
            {comments.slice(comments.length-5,comments.length).map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments}