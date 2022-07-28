import SubPlan from "./SubPlan.js";
import ProgressBar from "./ProgressBar.js";
import './../../styles/planDetails/Plan.css';

export default function Plan(props) {
    const plan = props.plan;
    let planName = plan['name'];
    let startDate = new Date(plan.startDate);
    let dueDate = new Date(plan.dueDate);

    return (
        <div className='Plan'>

            <div className='titleContainer'>
                <h1> {planName} </h1>
                <ProgressBar plan={plan} />
            </div>
            <div className='planSummary'>
                <h3> <strong>Started: </strong> 
                    {
                        startDate.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                    })} 
                </h3>

                <h3> <strong>Due: </strong> 
                    {
                        dueDate.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                    })} 
                </h3>
                <div>
                    <h3> <strong>Labels:</strong> {plan.labels.join(",")}</h3>
                </div>

                <h3> <strong>Description:</strong> {plan.description}</h3>
            </div>

            <div>
                <h2> Tasks: </h2>

                {plan.plans.map(subPlan => {
                    return (
                        <SubPlan subPlan={subPlan} isComplete={subPlan.isComplete}/>
                    )
                })}
            </div>
        </div>
    )
}
