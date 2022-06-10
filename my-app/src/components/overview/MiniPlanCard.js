import Label from "./Label";
import Subtask from "./MiniTask";
import ProgressBar from "./ProgressBar";
import "./../../styles/overview/MiniPlan.css";

function MiniPlan(props) {
    const thisMiniPlan = props.data.plans[props.id];
    const labels = [];
    const subTasks = [];
    const dueTasks = [];
    const currentDate = new Date();

    if (currentDate.getMonth === 1) {
        
    }

    for (let i = 0; i < thisMiniPlan.labels.length; i++) {
        labels.push(
            <Label
                key={i.toString()}
                labelNumber={i}
                data={thisMiniPlan.labels[i]}
            />
        );
    }

    for (let i = 0; i < thisMiniPlan.plans.length; i++) {
        subTasks.push(
            <Subtask
                key={i.toString()}
                taskNumber={i}
                data={thisMiniPlan.plans[i]}
            />
        );
    }

    for (let i = 0; i < thisMiniPlan.plans.length; i++) {
        dueTasks.push(
            // push subtask 
        );
    }



    return (
        <div className="card">
            <div className="card-content">
                <div className="heading-section">
                    <h2>{thisMiniPlan.name}</h2>
                    <i
                        className="fa-solid fa-pen-to-square"
                        onClick={() => alert("TODO: open editing modal")}
                    ></i>
                    <h6>Due: {thisMiniPlan.dueDate}</h6>
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
