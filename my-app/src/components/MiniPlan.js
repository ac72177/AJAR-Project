import Label from "./Label";
import MiniTask from "./MiniTask";
import ProgressBar from "./ProgressBar";
import "../styles/MiniPlan.css";

function MiniPlan(props) {
    const labels = [];
    const subplans = [];
    for (let i = 0; i < props.data.plans[props.cardNumber].labels.length; i++) {
        labels.push(
            <Label
                key={i.toString()}
                labelNumber={i}
                data={props.data.plans[props.cardNumber].labels[i]}
            />
        );
    }

    for (let i = 0; i < props.data.plans[props.cardNumber].plans.length; i++) {
        subplans.push(
            <MiniTask
                key={i.toString()}
                taskNumber={i}
                data={props.data.plans[props.cardNumber].plans[i]}
            />
        );
    }

    return (
        <div className="card">
            <div className="card-content">
                <div className="heading-section">
                    <h2>{props.data.plans[props.cardNumber].name}</h2>

                    <i
                        className="fa-solid fa-pen-to-square"
                        onClick={() => alert("TODO: open editing modal")}
                    ></i>
                    <h6>Due: {props.data.plans[props.cardNumber].dueDate}</h6>
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
                        {subplans}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MiniPlan;
