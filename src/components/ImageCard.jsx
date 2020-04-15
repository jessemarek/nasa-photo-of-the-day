import React from 'react'


const ImageCard = props => {
    const { title, url, explanation, copyright, date } = props.imageData

    return (
        <div className='image-card'>
            
            <h3 className='card-title'>{title}</h3>
            <div>
                <img src={url} alt='from NASA' />
                <p className='img-text'>{explanation}</p>
            </div>
            
            <p className='copyright'>Photo by {copyright}  ©{date}</p>
        </div>
    )
} 


export default ImageCard