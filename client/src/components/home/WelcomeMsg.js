import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserAsync } from "../../redux/users/thunks";
import { useAuth0 } from "@auth0/auth0-react";

export default function WelcomeMsg() {
  const { user } = useAuth0();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAsync(user.sub));
  }, []);
  let usersState = useSelector((state) => state.users.list);
  let returnedUser = usersState[0];

  if (returnedUser !== undefined) {
    return (
      <div className="Welcome-message">
        <h1>
          {" "}
          <strong> Hi {returnedUser.name_first}! </strong>{" "}
        </h1>
      </div>
    );
  }
}
