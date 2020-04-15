import React from 'react'
import ImageBody from './ImageBody'
import Copyright from './Copyright'


const ImageCard = props => {

    return (
        <div className='image-card'>
            {/*Pass the necessary props off to the components*/}
            <ImageBody imageData={props.imageData} />
            <Copyright copyright={props.imageData} />
        </div>
    )
} 


export default ImageCard