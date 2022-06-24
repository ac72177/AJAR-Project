import React from 'react'
import { useDispatch } from 'react-redux'


export default function DeletePlanButton(props) {
    const dispatch = useDispatch();

    const deletePlan = () => {
        dispatch({type: 'plans/deletePlan', payload: props.id})
    }
    

    return (
        <div>
            <button className="button" onClick={deletePlan}>
                Delete
            </button>
        </div>
    );
}