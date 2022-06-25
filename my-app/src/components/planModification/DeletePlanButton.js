import React from 'react'
import { useDispatch } from 'react-redux'
import { deletePlanAsync } from '../../redux/plans/thunks';


export default function DeletePlanButton(props) {
    const dispatch = useDispatch();

    const deletePlan = () => {
        dispatch(deletePlanAsync(props.id));
    }
    

    return (
        <div>
            <button className="button" onClick={deletePlan}>
                Delete
            </button>
        </div>
    );
}