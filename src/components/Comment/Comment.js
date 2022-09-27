import React from 'react';
import {Link} from "react-router-dom";

const Comment = ({comment}) => {
    return (
        <div>
            <h2>{comment.id} - {comment.name}</h2>
            <p>PostId:{comment.postId}</p>
            <div>
                <Link to={comment.postId.toString()}>Details</Link>
            </div>

        </div>
    );
};

export {Comment}