import React, { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {imageRequest} from '../redux/imgGallery/action';
import Cards from './Cards';
import Loader from './Loader';

const Gallery=()=>{
    const img=useSelector(state=>state.img);
    const dispatch=useDispatch();
     useEffect(()=>{
        dispatch(imageRequest())
    },[dispatch])
    return(
        <div className="photo_gallery">
            <h1>Image Gallery</h1>
            {img.data.map(v=>{
                 return img.loader?<Loader />:<Cards key={v.key} name={v.author} img={v.download_url}   />                    
            })}
        </div>
    )
}

export default Gallery;