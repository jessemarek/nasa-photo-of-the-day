import React from 'react'
import styled from 'styled-components'
import ImageBody from './ImageBody'
import Copyright from './Copyright'

//Styles for the component elements
const Container = styled.div`
    width: 50%;
    margin: 0 auto;
    border: 2px solid black;
    border-radius: 7px;
    padding: 2%;
    background: #ccc;
`

const ImageCard = props => {

    return (
        <Container>
            {/*Pass the necessary props off to the components*/}
            <ImageBody imageData={props.imageData} />
            <Copyright copyright={props.imageData} />
        </Container>
    )
} 


export default ImageCard