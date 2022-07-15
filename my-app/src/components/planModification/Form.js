import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPlanAsync, putPlanAsync } from '../../redux/plans/thunks';

export default function Form(props) {
    const [planName, setName] = useState('');
    const [labels, setLabels] = useState('');
    const [startDate, setStart] = useState('');
    const [dueDate, setEnd] = useState('');
    const [description, setDescription] = useState('');
    const [tasks, setTasks] = useState('');
    const dispatch = useDispatch();

    const savePlan = (e) => {
        e.preventDefault();

        let subplans = tasks.split(","); 
        let subplanObjects = []
        for (let i = 0; i < subplans.length; i++ ) {
            let subplanObject = {
                name: subplans[i],
                isComplete: false
            }
            subplanObjects.push(subplanObject)
        }
        console.log(props.id)
        const data = {
            _id: props.id,
            name: planName,
            labels: labels.split(","),
            startDate: startDate,
            dueDate: dueDate,
            description: description,
            subPlans: subplanObjects
        }
        if (props.put) {
            dispatch(putPlanAsync(data));
        } else {
            dispatch(addPlanAsync(data));
        }
    }

    return (
    <div className="form">
        
        <label>Name: <input type="text" name="title" value={planName} onChange={(e) => {setName(e.target.value)}}></input></label>
        <br></br>

        <label>Start date: <input type="text" name="start" value={startDate} onChange={(e) => {setStart(e.target.value)}}></input></label>
        <br></br>

        <label>Due date: <input type="text" name="due" value={dueDate} onChange={(e) => {setEnd(e.target.value)}}></input></label>
        <br></br>

        <label>Description: <input type="text" name="description" value={description} onChange={(e) => {setDescription(e.target.value)}}></input></label>
        <br></br>

        <label>Labels: <input type="text" name="labels" value={labels} onChange={(e) => {setLabels(e.target.value)}}></input></label>
        <br></br>

        <label>Tasks: <input type="text" name="tasks" value={tasks} onChange={(e) => {setTasks(e.target.value)}}></input></label>

        <br></br>
        <div className="buttons">
            <input type="submit" value="Cancel" onClick={props.handleClose}></input>
            <input type="submit" value="Save" onClick={savePlan}></input>
        </div>
    </div>
    )
}