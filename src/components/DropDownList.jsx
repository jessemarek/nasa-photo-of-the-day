import React from 'react'

const DropDownList = props =>{

    return(
        <div className='dropdown'>
            <label>Choose a date:</label>

            <select onChange={props.onChange}>
                <option value='2020-04-15'>Today</option>
                <option value='2020-03-09'>WEB 30 Start</option>
                <option value='2020-02-08'>My Birthday</option>
                
            </select>
        </div>
    )
}

export default DropDownList