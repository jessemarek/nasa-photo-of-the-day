import React from 'react'
import styled from 'styled-components'

//Styles for the component elements
const Dropdown = styled.div`
    width: 50%;
    margin: 3% auto;
    border: 2px solid black;
    border-radius: 7px;
    padding: 2%;
    background: #ccc;
`

const Label = styled.label`
    margin: 0 3%;
    font-size: 2rem;
    text-transform: capitalize;
`

const Select = styled.select`
    width: 30%;
    margin: 0 3%;
    border: 1px solid;
    background: #eee;
    outline: none;
    vertical-align: text-bottom;
`

const DropDownList = props =>{

    return(
        <Dropdown>
            <Label>choose a date:</Label>

            <Select onChange={props.onChange}>
                <option value='2020-04-16'>Today</option>
                <option value='2020-04-15'>Yesterday</option>
                <option value='2020-03-09'>WEB 30 Start</option>
                <option value='2020-02-08'>My Birthday</option>
                
            </Select>
        </Dropdown>
    )
}

export default DropDownList