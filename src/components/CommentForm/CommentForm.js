import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import css from "./CommentForm.module.css"

import {userService} from "../../services";
import {CommentValidator} from "../../validators";

const CommentForm = ({setComments}) => {
    const {register,handleSubmit,reset,formState:{isValid,errors}}=useForm({
        mode:'all',
        resolver:joiResolver(CommentValidator)
    })

    const submit = async (data) => {
       const {data:newComment} = await userService.createComment(data)
        setComments(comments=> [...comments,newComment]);
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div className=''>
                <input type="text" placeholder={'id поста до якого відноситься'} {...register('postId')}/>
                {errors.postId && <span>{errors.postId.message}</span>}
                <input type="text" placeholder={'Коментар'} {...register('name')}/>
            </div>

            <div className={css.div_button} >
                <button disabled={!isValid}>create comment</button>
            </div>
        </form>
    );
};

export default CommentForm;