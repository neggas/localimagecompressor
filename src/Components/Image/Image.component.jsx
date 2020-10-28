import React from 'react'

import "./Image.style.css"
export const  Image = ({image})=>{
    return (
        <div className="imageborder col-md-3">
            <img  alt="imported" src={image} />
        </div>
    )
}