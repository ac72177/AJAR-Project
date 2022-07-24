import SubPlan from "./SubPlan.js";
import ProgressBar from "./ProgressBar.js";
import "./../../styles/planDetails/Plan.css";
import { useDispatch } from "react-redux";

export default function Plan(props) {
  const plan = props.plan;
  const dispatch = useDispatch();
  let planName = plan["name"];

  const markAllComplete = () => {
    // TODO
    // console.log(plan);
    // for (let i = 0; i < plan.plans.length(); i++) {
    //     plan.plans[i].isComplete = true;
    // }
    // dispatch(putPlanAsync(plan));
  };

  return (
    <div className="Plan">
      <div className="titleContainer">
        <h1> {planName} </h1>
        <ProgressBar plan={plan} />
      </div>
      <div className="planSummary">
        <h3>
          {" "}
          <strong>Started:</strong> {plan.startDate}{" "}
        </h3>

        <h3>
          {" "}
          <strong>Due Date:</strong> {plan.dueDate}{" "}
        </h3>

        <div>
          <h3>
            {" "}
            <strong>Labels:</strong> {plan.labels}
          </h3>
        </div>

        <h3>
          {" "}
          <strong>Description:</strong> {plan.description}
        </h3>

        <h3>
          {" "}
          <strong>Attachments:</strong> {pullAttachments()}
        </h3>
      </div>

      <div>
        <h2> Tasks: </h2>

        <button onClick={markAllComplete}>Mark all completed</button>

        {plan.plans.map((subPlan) => {
          return <SubPlan subPlan={subPlan} isComplete={subPlan.isComplete} />;
        })}
      </div>
    </div>
  );
}

function pullAttachments() {
  return "attachment1.pdf";
}
