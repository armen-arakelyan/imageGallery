import React, { useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {imageRequest} from '../redux/imgGallery/action';
import Cards from './Cards';
import Loader from './Loader';

const Gallery=()=>{
    const img=useSelector(state=>state.img);
    const dispatch=useDispatch();
     useEffect(()=>{
         dispatch(imageRequest());
    },[dispatch])
    const loadfunc=()=>{
            if(img.loader===true){
                dispatch(imageRequest(img.loader))
            }
    }
    useEffect(()=>{
        document.addEventListener('scroll',()=>{   
            let height = Math.max( document.body.scrollHeight,null) ;  
            if (window.scrollY+939===height) {
                loadfunc()
              }
        })
    })
    return(
        <div className="photo_gallery">
            <h1>Image Gallery</h1>
            { img.data.length===0 ?<Loader />:
             img.data.map((v,i)=>{
                 return <div key={i}>
                     <Cards name={v.author} img={v.download_url} />
                      </div>           
            })
        }
        </div>
    )
}

export default Gallery;