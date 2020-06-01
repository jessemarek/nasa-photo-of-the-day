import React from 'react'
import styled from 'styled-components'

//Styles for the component elements
const CardBody = styled.div`
    img{
        width: 90%;
        margin: 5% auto;
        border-radius: 7px;
    }

    h3{
        margin: 0 auto;
        font-size: 2.4rem;
    }

    p{
        max-height: 26vh;
        margin: 5% 0;
        padding: 0 4%;
        text-align: justify;
        font-size: 1.6rem;
        overflow: auto;
    }
`

const ImageBody = props =>{
    //Destructure the data obj into the pieces we need for this component
    const { url, title, explanation } = props.imageData

    return(

        <CardBody>
            <img src={url} alt='from NASA' />
            <h3>{title}</h3>
            <p>{explanation}</p>
        </CardBody>
    )
}

export default ImageBody