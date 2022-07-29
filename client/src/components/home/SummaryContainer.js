import SummaryBar from "./SummaryBar";
import "./../../styles/home/SummaryBar.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPlansAsync } from "../../redux/plans/thunks";
import { useAuth0 } from "@auth0/auth0-react";

export default function SummaryBarContainer() {
  const dispatch = useDispatch();
  const userPlans = useSelector((state) => state.plans.list);
  const { user } = useAuth0();

  useEffect(() => {
    dispatch(getPlansAsync(user.sub));
  }, []);

  return (
    <div className="SummaryBarContainer">
      <SummaryBar plans={userPlans} />
    </div>
  );
}
