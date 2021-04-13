import React from 'react';

const Cards=(props)=>{
    return(
         <div className="gallery">
                <div className="gallery_content">
                <img src={props.img} alt="img" />
                <h2>{props.name}</h2>
                </div>
    </div>
    )
}
export default Cards;