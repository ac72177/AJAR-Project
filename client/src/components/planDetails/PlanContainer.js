import Plan from "./Plan.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./../../styles/planDetails/PlanContainer.css";
import { useAuth0 } from "@auth0/auth0-react";
import { getPlansAsync } from "../../redux/plans/thunks";

export default function PlanContainer() {
  const { plan_ID } = useParams();
  const dispatch = useDispatch();
  const plans = useSelector((state) => state.plans.list);
  const { user } = useAuth0();

  useEffect(() => {
    dispatch(getPlansAsync(user.sub));
  }, []);

  let plan = plans.find((plan) => plan._id === plan_ID);

  return (
    <div className="PlanContainer">
      <Plan plan={plan} />
    </div>
  );
}
