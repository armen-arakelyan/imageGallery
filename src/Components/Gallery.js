import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {imageRequest} from '../redux/imgGallery/action'

const Gallery=()=>{
    const img=useSelector(state=>state.img);
    const dispatch=useDispatch();
    console.log(imageRequest())
    return(
        <div className="wrapper">
            <div className="gallery">
                
            </div>
        </div>
    )
}

export default Gallery;