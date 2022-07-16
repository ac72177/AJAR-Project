import './../../styles/planDetails/ProgressBar.css';

export default function ProgressBar(props) {
    const plan = props.plan;

    let currDate = new Date();
    let totalTasks = plan.plans.length;
    let completedTasks = 0;
    let dueThisMonth = 0;

    for (const subPlan of plan.plans) {
        if (subPlan.isComplete) {
            completedTasks++;
        } else {
            let dueDate = new Date(subPlan.dueDate);
            if (dueDate.getMonth() === currDate.getMonth()) {
                dueThisMonth++;
            }
        }
    }
    return (
        <div className="progressBar">
            {/* total tasks */}
            <div className='dataPoint'>
                <h1>{completedTasks} / {totalTasks}</h1>
                <h3> <strong> Total Tasks Completed </strong></h3>
            </div>

            {/* tasks due this month */}
            <div className='dataPoint'>
                <h1>{dueThisMonth}</h1>
                <h3> <strong> Tasks Due This Month </strong></h3>
            </div>
        </div>
    );
}

