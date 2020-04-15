import React from 'react'
import ImageBody from './ImageBody'
import Copyright from './Copyright'


const ImageCard = props => {
    const { title, url, explanation, copyright, date } = props.imageData

    return (
        <div className='image-card'>
            <ImageBody imageData={props.imageData} />
            
            <Copyright copyright={copyright} date={date} />
        </div>
    )
} 


export default ImageCard