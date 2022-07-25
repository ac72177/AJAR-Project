// import Garden from "./Garden";
import "./../../styles/home/Garden.css";
import { useDispatch, useSelector } from "react-redux";
import Garden from "./Garden";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getPlansAsync } from "../../redux/plans/thunks";

export default function GardenContainer() {
  const dispatch = useDispatch();
  const userPlans = useSelector((state) => state.plans.list);
  const plans = [];
  const { user } = useAuth0();

  useEffect(() => {
    dispatch(getPlansAsync(user.sub));
  }, []);

  for (let i = 0; i < userPlans.length; i++) {
    plans.push(userPlans[i]);
  }

  return (
    <div className="garden">
      <Garden plans={plans} />
    </div>
  );
}
