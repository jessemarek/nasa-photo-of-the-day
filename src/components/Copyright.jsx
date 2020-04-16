import React from 'react'
import styled from 'styled-components'

const CopyrightCredits = styled.p`
    text-align: left;
    font-size: 1.2rem;
`

const Copyright = props =>{
     //Destructure the data obj into the pieces we need for this component
    const { copyright, date } = props.copyright

    return(
        copyright && <CopyrightCredits>Photo by {copyright}  ©{date}</CopyrightCredits>
    )
}

export default Copyright