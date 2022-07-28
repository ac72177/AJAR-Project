import { useSelector } from "react-redux";
import Label from "./Label";
import Subtask from "./MiniTask";
import ProgressBar from "./MyProgressBar";
import DeletePlanButton from "../planModification/DeletePlanButton";
import EditPlanButton from "../planModification/EditPlanButton";
import "./../../styles/overview/MiniPlan.css";
import { useNavigate } from "react-router-dom"

function MiniPlan(props) {
    const userPlans = useSelector((state) => state.plans.list);
    const currPlan = props.id;

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
                plan={currPlan}
                data={currPlan.plans[i]}
            />
        );
    }
    // TODO
    for (let i = 0; i < currPlan.plans.length; i++) {
        dueTasks.push(
            // push subtask 
        );
    }

    // React route onClick: https://stackoverflow.com/questions/71540485/how-to-navigate-through-routing-on-button-click-in-react-react-router-6-2-1
    const navigate = useNavigate();

    return (
        <div className="card">
            
            <div className="card-content" >
                <div className="heading-section">
                    <h2>{currPlan.name}</h2>
                    <div className={"ButtonContainer"}>
                        <EditPlanButton id={currPlan._id}/>
                        <DeletePlanButton id={currPlan._id} />
                        <i
                            className="fa-solid fa-eye"
                            onClick={() => {navigate("/plans/" + currPlan._id)}}
                        ></i>
                    </div>
                    <h6>Due: {currPlan.dueDate}</h6>
                </div>

                <div className="labels-section">{labels}</div>
                <div className="progress-bar-section">
                    <ProgressBar props={currPlan} />
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
