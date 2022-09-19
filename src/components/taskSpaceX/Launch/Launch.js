
import React from 'react';

function Launch({item}) {

    return (
        <div>
            <h2>{item.flight_number}</h2>
            <img src={item.links.mission_patch_small} alt=""/>
        </div>
    );
}

export default Launch;