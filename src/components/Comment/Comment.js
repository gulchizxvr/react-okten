import React from 'react';

const Comment = ({comment}) => {
    return (
        <div>
            <h3>id - {comment.id} </h3>
            <p>postId - {comment.postId} - {comment.name}</p>
        </div>
    );
};

export default Comment;