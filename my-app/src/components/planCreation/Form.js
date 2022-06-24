import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPlanAsync } from '../../redux/plans/thunks';

export default function Form(props) {
    const [planName, setName] = useState('');
    const [belongsTo, setBelongsTo] = useState('');
    const [labels, setLabels] = useState('');
    const [startDate, setStart] = useState('');
    const [dueDate, setEnd] = useState('');
    const [description, setDescription] = useState('');
    // const [plans, setPlans] = useState('');
    // const [attachments, setAttachments] = useState('');
    const dispatch = useDispatch();

    const savePlan = (e) => {
        e.preventDefault();
        const data = {
            planName: planName,
            labels: labels,
            startDate: startDate,
            dueDate: dueDate,
            description: description,
            belongsTo: belongsTo, 
            // subPlans: plans,
            // attachments: attachments
        }
        if (props.put) {
            // dispatch(putPlanAsync(data));
        } else {
            dispatch(addPlanAsync(data));
        }
    }

    return (
    <div className="form">
        
        <label>Name: <input type="text" name="title" value={planName} onChange={(e) => {setName(e.target.value)}}></input></label>
        <br></br>

        <label>Belongs to: <input type="text" name="belongsTo" value={belongsTo} onChange={(e) => {setBelongsTo(e.target.value)}}></input> </label>
        <br></br>

        <label>Start date: <input type="text" name="start" value={startDate} onChange={(e) => {setStart(e.target.value)}}></input></label>
        <br></br>

        <label>Due date: <input type="text" name="due" value={dueDate} onChange={(e) => {setEnd(e.target.value)}}></input></label>
        <br></br>

        <label>Description: <input type="text" name="description" value={description} onChange={(e) => {setDescription(e.target.value)}}></input></label>
        <br></br>

        <label>Labels: <input type="text" name="labels" value={labels} onChange={(e) => {setLabels(e.target.value)}}></input></label>

        <br></br>
        <div className="buttons">
            <input type="submit" value="Cancel" onClick={props.handleClose}></input>
            <input type="submit" value="Save" onClick={savePlan}></input>
        </div>
    </div>
    )
}