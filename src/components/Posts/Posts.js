import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";


import {Post} from "../Post/Post";
import {jsonService} from "../../services";

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