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
            Останні 20 альбомів
            {albums.map(album=><Album key={album.id} album={album}/>)}
        </div>
    );
};

export  {Albums}