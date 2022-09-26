import React from 'react';

const Album = ({album}) => {
    return (
        <div>
            <p>id:{album.id}<br/>{album.title}</p>
        </div>
    );
};

export {Album}