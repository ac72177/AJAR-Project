import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserAsync } from "../../redux/users/thunks";
import { useAuth0 } from "@auth0/auth0-react";

export default function WelcomeMsg() {
  const { user } = useAuth0();
  const dispatch = useDispatch();
  let greeting = "";
  const date = new Date();
  const hour = date.getHours();
  if (hour >= 0 && hour < 5) {
    greeting = "Happy owl hours";
  } else if (hour >= 5 && hour < 12) {
    greeting = "Good morning";
  } else if (hour >= 12 && hour < 18) {
    greeting = "Good afternoon";
  } else if (hour >= 18 && hour < 24) {
    greeting = "Good evening";
  }

  useEffect(() => {
    dispatch(getUserAsync(user.sub));
  }, []);
  let usersState = useSelector((state) => state.users.list);
  let returnedUser = usersState[0];

  if (returnedUser !== undefined) {
    return (
      <div>
        <h1 className="Welcome-message">
          {" "}
          <strong>
            {" "}
            {greeting}, {returnedUser.name_first}{" "}
          </strong>{" "}
        </h1>
      </div>
    );
  }
}
