import "./../../styles/overview/MiniTask.css";
import { useDispatch } from 'react-redux'
import React, { useState } from 'react'
import { putPlanAsync } from '../../redux/plans/thunks';

function MiniTask(props) {
    const [checked, setChecked] = useState(props.data.isComplete);
    const dispatch = useDispatch();

    const checkBox = () => {
        let tasks = props.plan.plans
        let data = [...tasks];
        let task = {
            _id: props.data._id,
            name: props.data.name,
            isComplete: !checked
        }

        let index = tasks.findIndex(task => task._id === props.data._id)

        data[index] = task;
        
        let checkComplete;
        for ( let i = 0; i < data.length; i++ ) {

            if (data[i].isComplete == true) {
                checkComplete = true;
            } else {
                checkComplete = false;
                break;
            }
        }

        console.log("Complete:" + checkComplete)

        let request = {
            _id: props.plan._id,
            plans: data,
            isComplete: checkComplete
        }

        dispatch(putPlanAsync(request));
        setChecked(!checked);
    }

    return (
        <div className="mini-task">
            <input type="checkbox" defaultChecked={checked} onClick={checkBox}/>
            <p className="subtask">
                        Task #{props.taskNumber}: {props.data.name}
                    </p>
            <hr className="row-end"></hr>
        </div>
    );
}

export default MiniTask;
