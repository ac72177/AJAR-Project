import React, { useState } from 'react'

export default function Form(props) {

    const dummyFunction = () => {
    }

    return (
    <div className="form">
        
        <label>Name: <input type="text" name="title" onChange={dummyFunction}></input></label>
        <br></br>

        <label>Belong to: <input type="text" name="parent" onChange={dummyFunction}></input> </label>
        <br></br>

        <label>Start date: <input type="text" name="start" onChange={dummyFunction}></input></label>
        <br></br>

        <label>Due date: <input type="text" name="due" onChange={dummyFunction}></input></label>
        <br></br>

        <label>Description: <input type="text" name="description" onChange={dummyFunction}></input></label>
        <br></br>
        <div className="buttons">
            <input type="submit" value="Cancel" onClick={props.handleClose}></input>
            <input type="submit" value="Save" onClick={dummyFunction}></input>
        </div>
    </div>
    )
}