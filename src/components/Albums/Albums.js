import React, {useEffect, useState} from 'react';

import {jsonService} from "../../service";
import {Album} from "../Album/Album";


const Albums = () => {
    const [albums,setAlbums] = useState([]);

    useEffect(()=>{
        jsonService.getAlbums().then(({data})=>setAlbums(data))
    })

    return (
        <div>
            <h2>All albums</h2>
            {albums.map(album=><Album key={album.id} album={album}/>)}
        </div>
    );
};

export  {Albums}