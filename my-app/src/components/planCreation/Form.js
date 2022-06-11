import React, { useState } from 'react'

export default function Form() {

    const dummyFunction = () => {
    }

    return (
    <div className="container">
        <label>Name:</label><br></br>
        <input type="text" name="title" onChange={dummyFunction}></input><br></br>

        <label>Belong to:</label><br></br>
        <input type="text" name="parent" onChange={dummyFunction}></input><br></br>

        <label>Start date:</label><br></br>
        <input type="text" name="start" onChange={dummyFunction}></input><br></br>

        <label>Due date:</label><br></br>
        <input type="text" name="due" onChange={dummyFunction}></input><br></br>

        <label>Description:</label><br></br>
        <input type="text" name="description" onChange={dummyFunction}></input><br></br>

        <input type="submit" value="Cancel" onClick={dummyFunction}></input>
        <input type="submit" value="Save" onClick={dummyFunction}></input>
    </div>
    )
}