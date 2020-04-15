import React from 'react'

const ImageBody = props =>{
    //Destructure the data obj into the pieces we need for this component
    const { url, title, explanation } = props.imageData

    return(

        <div className='card-body'>
            <img src={url} alt='from NASA' />

            <h3 className='card-title'>{title}</h3>
            <p className='img-text'>{explanation}</p>
        </div>
    )
}

export default ImageBody