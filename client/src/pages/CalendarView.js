import MyCalendar from "../components/calendar/MyCalendar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPlansAsync } from "../redux/plans/thunks";
import { useAuth0 } from "@auth0/auth0-react";

export default function CalendarView() {
  const dispatch = useDispatch();
  const userPlans = useSelector((state) => state.plans.list);
  const { user } = useAuth0();
  const plans = [];

  useEffect(() => {
    dispatch(getPlansAsync(user.sub));
  }, []);

  for (let i = 0; i < userPlans.length; i++) {
    plans.push(userPlans[i]);
  }
  return (
    <div>
      <MyCalendar plans={plans} />
    </div>
  );
}
