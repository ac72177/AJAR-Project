import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPlansAsync } from "../../redux/plans/thunks";
import { useAuth0 } from "@auth0/auth0-react";
import WelcomeMsg from "./WelcomeMsg";

export default function WelcomeMsgContainer() {
  const dispatch = useDispatch();
  const userPlans = useSelector((state) => state.plans.list);
  const { user } = useAuth0();

  useEffect(() => {
    dispatch(getPlansAsync(user.sub));
  }, []);

  return (
    <div>
      <WelcomeMsg userName={user.nickname} />
    </div>
  );
}
