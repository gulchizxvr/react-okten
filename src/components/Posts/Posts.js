import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {jsonService} from "../../services/json.service";
import {Post} from "../Post/Post";

const Posts = () => {

    let dispatch = useDispatch()

    let state = useSelector(state => state)

    useEffect(()=>{
        jsonService.getPosts().then(({data})=>{
            dispatch({type:"loadPosts",payload:data})
        })
    },[])

    return (
        <div>
            {state.postsReducer.posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts}