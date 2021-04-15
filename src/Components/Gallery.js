import React, { useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {imageRequest} from '../redux/imgGallery/action';
import Cards from './Cards';
import Loader from './Loader';

const Gallery=()=>{
    const img=useSelector(state=>state.img);
    const page=useSelector(state=>state.img.page);
    const load=useSelector(state=>state.img.loader);
    const dispatch=useDispatch();

     useEffect(()=>{
         dispatch(imageRequest());
    },[dispatch])

    useEffect(()=>{
       window.onscroll=()=>{   
            let height = Math.max( document.body.scrollHeight,null); 
            if (window.innerHeight+window.document.documentElement.scrollTop===height) {
                    dispatch(imageRequest(page))
              }
        }
        if(page===6){
            return window.onscroll=()=>{
                return false;
            }
        }
    })
    return(
        <div className="photo_gallery">
            <h1>Image Gallery</h1>
             {img.data.length===0?<Loader />:img.data.map((v,i)=>{
                 return <div key={i}>
                     <Cards name={v.author} img={v.download_url} />
                      </div>           
            })
        }
        <Loader style={{display:load?'block':'none'}} />
        </div>
    )
}

export default Gallery;