import SummaryBar from "./SummaryBar";
import "./../../styles/home/SummaryBar.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPlansAsync } from "../../redux/plans/thunks";

export default function SummaryBarContainer() {
  const dispatch = useDispatch();
  const userPlans = useSelector((state) => state.plans.list);

  useEffect(() => {
    dispatch(getPlansAsync());
  }, []);

  return (
    <div className="SummaryBarContainer">
      <SummaryBar plans={userPlans} />
    </div>
  );
}
