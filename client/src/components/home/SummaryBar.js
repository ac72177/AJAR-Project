import "./../../styles/home/SummaryBar.css";

export default function SummaryBar(props) {
  const plans = props.plans;

  let currDate = new Date();
  let totalPlans = plans.length;
  let activePlans = plans.length;
  let plansCompleted = 0;
  let totalTasks = 0;
  let completedTasks = 0;
  let dueThisMonth = 0;

  for (const plan of plans) {
    for (const subPlan of plan.plans) {
      if (subPlan.isComplete) {
        completedTasks++;
      }
      totalTasks++;
    }
    if (plan.isComplete) {
      plansCompleted++;
      activePlans--;
    } else {
      let dueDate = new Date(plan.dueDate);
      if (dueDate.getMonth() === currDate.getMonth()) {
        dueThisMonth++;
      }
    }
  }

  return (
    <div className="summaryBar">
      {/* active plans */}
      <div className="summaryData">
        <h1>
          {" "}
          <strong>
            {" "}
            {activePlans} / {totalPlans}{" "}
          </strong>
        </h1>
        <h3>
          {" "}
          <strong> Active Plans </strong>
        </h3>
      </div>

      {/* total tasks */}
      <div className="summaryData">
        <h1>
          {" "}
          <strong>
            {" "}
            {completedTasks} / {totalTasks}{" "}
          </strong>{" "}
        </h1>
        <h3>
          {" "}
          <strong> Total Tasks Completed </strong>
        </h3>
      </div>

      {/* tasks due this month */}
      <div className="summaryData">
        <h1>
          {" "}
          <strong> {dueThisMonth} </strong>{" "}
        </h1>
        <h3>
          {" "}
          <strong> Plans Due This Month </strong>
        </h3>
      </div>

      {/* plans completed */}
      <div className="summaryData">
        <h1>
          {" "}
          <strong> {plansCompleted}</strong>{" "}
        </h1>
        <h3>
          {" "}
          <strong> Plans Completed </strong>
        </h3>
      </div>
    </div>
  );
}
