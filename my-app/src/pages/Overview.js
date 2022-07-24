import "./../styles/overview/Overview.css";
import Filter from "../components/overview/Filter";
import MiniPlanCard from "../components/overview/MiniPlanCard";
import Sort from "../components/overview/Sort";
import CreatePlanButton from "../components/planModification/CreatePlanButton";
import SummaryContainer from "../components/home/SummaryContainer";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlansAsync } from "../redux/plans/thunks";

function Overview() {
  const dispatch = useDispatch();
  const userPlans = useSelector((state) => state.plans.list);
  const cards = [];

  useEffect(() => {
    dispatch(getPlansAsync());
  }, []);

  for (let i = 0; i < userPlans.length; i++) {
    // Todo @Andrea might be able to use userPlans[i]._id for id?
    cards.push(<MiniPlanCard key={i} id={i} />);
  }

  return (
    <div className="Overview">
      <SummaryContainer />
      <div className="section options-container">
        <div className="option new-plan-button">
          <CreatePlanButton />
        </div>
        <div className="option sort-button">
          <Sort plans={userPlans} />
        </div>

        <div className="option filter-button">
          <Filter plans={userPlans} />
        </div>
      </div>

      <div className="section grid-container">{cards}</div>
    </div>
  );
}

export default Overview;
