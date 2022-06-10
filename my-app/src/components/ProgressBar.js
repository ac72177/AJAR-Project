export default function ProgressBar(props) {
    const plan = props.plan;

    let currDate = new Date();
    console.log(currDate);
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
        <div>
            {/* total tasks */}
            <div>
                <h1>{completedTasks} / {totalTasks}</h1>
                <h3> Total Tasks Completed </h3>
            </div>

            {/* tasks due this month */}
            <div>
                <h1>{dueThisMonth}</h1>
                <h3>Tasks Due This Month</h3>
            </div>
        </div>
    );
}

