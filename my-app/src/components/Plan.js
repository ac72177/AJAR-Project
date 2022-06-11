import SubPlan from "./SubPlan.js";
import ProgressBar from "./ProgressBar.js";
import './Plan.css'

export default function Plan(props) {
    const plan = props.plan;
    let planName = plan['name'];
    return (
        <div className='Plan'>
            <div>
                <h1> {planName} </h1>

                <div>
                    <h3> Started:</h3>
                    <p>{plan.startDate}</p>
                </div>

                <div>
                    <h3> Due Date:</h3>
                    <p>{plan.dueDate}</p>
                </div>

                <div>
                    <h3> Labels: </h3>
                </div>

                <div>
                    <h3> Description:</h3><br />
                    <p>{plan.description}</p>
                </div>

                <div>
                    <h3> Attachments: </h3>
                    <p>{pullAttachments()}</p>
                </div>

                <ProgressBar plan={plan} />
            </div>

            <div>
                <h2> Tasks: </h2>
                {plan.plans.map(subPlan => {
                    return (
                        <SubPlan subPlan={subPlan} />
                    )
                })}
            </div>
        </div>


    )
}

function pullAttachments() {
    return 'attachment1.pdf';
}