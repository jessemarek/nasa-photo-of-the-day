import React from 'react'

const Copyright = props =>{
    const { copyright, date } = props

    return(
        <p className='copyright'>Photo by {copyright}  ©{date}</p>
    )
}

export default Copyright