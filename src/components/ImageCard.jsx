import React, { useState } from 'react'


const ImageCard = props => {
    const { title, url, explanation, copyright } = props

    return (
        <div className='image-card'>
            
            <h3 className='card-title'>Title</h3>
            <div>
                <img src='#'/>
                <p className='img-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi placeat vel odit adipisci, eos voluptate a corporis deserunt sed perferendis exercitationem cumque aspernatur unde fuga voluptatibus, totam itaque. Eum.</p>
            </div>
            
            <p className='copyright'>© First Last photos</p>
        </div>
    )
} 


export default ImageCard