import { ToastContainer } from 'react-toastify';

import ProgressBar from "./ProgressBar.js";
import "./../../styles/planDetails/Plan.css";
import CreateSubplanButton from "../planModification/CreateSubplanButton.js";
import SubplanGrid from "./SubplanGrid"
import InviteButton from './InviteButton.js';
import { Stack } from '@mui/material';

export default function Plan(props) {
  const plan = props.plan;
  let planName = plan["name"];
  let startDate = new Date(plan.startDate);
  let dueDate = new Date(plan.dueDate);
  
  return (
    <div className="Plan fade-in">
      <div className="titleContainer">
        <h1> {planName} </h1>
        <ProgressBar plan={plan} />
      </div>
      <div className="planSummary">
        <h3>
          {" "}
          <strong>Started: </strong>
          {startDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}
        </h3>

        <h3>
          {" "}
          <strong>Due: </strong>
          {dueDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}
        </h3>
        <div>
          <h3>
            {" "}
            <strong>Labels:</strong> {plan.labels.join(",")}
          </h3>
        </div>

        <h3>
          {" "}
          <strong>Description:</strong> {plan.description}
        </h3>
        <InviteButton plan={plan} />
      </div>

      <div>
        <Stack direction="row">
          <h2> Tasks </h2>
          <CreateSubplanButton subplan={true} currPlan={plan} />
        </Stack>

        <SubplanGrid plan={plan} />
      </div>
      <ToastContainer />
    </div>
  );
}
