import React from 'react'

const Copyright = props =>{
     //Destructure the data obj into the pieces we need for this component
    const { copyright, date } = props.copyright

    return(
        <p className='copyright'>Photo by {copyright}  ©{date}</p>
    )
}

export default Copyright