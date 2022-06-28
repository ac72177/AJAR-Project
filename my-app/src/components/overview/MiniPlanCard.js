import { useSelector } from "react-redux";
import Label from "./Label";
import Subtask from "./MiniTask";
import ProgressBar from "./ProgressBar";
import "./../../styles/overview/MiniPlan.css";

function MiniPlan(props) {
    const userPlans = useSelector((state) => state.plans.list);
    const currPlan = userPlans[props.id];

    const labels = [];
    const subTasks = [];
    const dueTasks = [];

    for (let i = 0; i < currPlan.labels.length; i++) {
        labels.push(
            <Label
                key={i.toString()}
                labelNumber={i}
                data={currPlan.labels[i]}
            />
        );
    }

    for (let i = 0; i < currPlan.plans.length; i++) {
        subTasks.push(
            <Subtask
                key={i.toString()}
                taskNumber={i}
                data={currPlan.plans[i]}
            />
        );
    }

    for (let i = 0; i < currPlan.plans.length; i++) {
        dueTasks.push(
            // push subtask 
        );
    }



    return (
        <div className="card">
            <div className="card-content">
                <div className="heading-section">
                    <h2>{currPlan.name}</h2>
                    <i
                        className="fa-solid fa-pen-to-square"
                        onClick={() => alert("TODO: open editing modal")}
                    ></i>
                    <h6>Due: {currPlan.dueDate}</h6>
                </div>

                <div className="labels-section">{labels}</div>
                <div className="progress-bar-section">
                    <ProgressBar props={props.data} />
                </div>

                <div className="subtasks-section">
                    <div className="due-this-week-section">
                        <h6>Due this week</h6>
                        <hr></hr>
                    </div>
                    <br></br>
                    <div className="all-tasks-section">
                        <h6>All Tasks</h6>
                        <hr></hr>
                        {subTasks}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MiniPlan;
