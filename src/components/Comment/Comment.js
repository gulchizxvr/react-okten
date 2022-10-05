import React from 'react';

const Comment = ({comment}) => {
    return (
        <div>
            <h1>{comment.id}</h1>
        </div>
    );
};

export {Comment}