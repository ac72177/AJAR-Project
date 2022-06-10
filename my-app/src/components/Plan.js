import SubPlan from "./SubPlan.js";
import ProgressBar from "./ProgressBar.js";

export default function Plan(props) {
    const plan = props.plan;
    let planName = plan['name'];
    return (
        <div>
            <h1> {planName} </h1>
            <h3> Labels: </h3>
            <h3> Description: {plan.description}</h3>
            <h3> Attachments: {pullFromArr([1, 2])}</h3>

            <ProgressBar plan={plan} />
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

function pullFromArr(list) {
    let str = '';
    list.map(item => str + ' ' + item);
    return str;
}