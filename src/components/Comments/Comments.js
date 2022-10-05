import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";


import {Comment} from "../Comment/Comment";
import {jsonService} from "../../services";

const Comments = () => {

    let state = useSelector(state => state)

    let dispatch = useDispatch()

    useEffect(()=>{
        jsonService.getComments().then(({data})=>{
            dispatch({type:"loadComments",payload:data})
        })
    })
    return (
        <div>
            {state.commentsReducer.comments.map(comment=> <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments}