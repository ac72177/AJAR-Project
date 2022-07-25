import React from "react";
import { useDispatch } from "react-redux";
import { deletePlanAsync } from "../../redux/plans/thunks";
import { useAuth0 } from "@auth0/auth0-react";

export default function DeletePlanButton(props) {
  const dispatch = useDispatch();
  const { user } = useAuth0();

  const deletePlan = () => {
    let deleteRequest = {
      plan: props.id,
      user: user.sub,
    };
    dispatch(deletePlanAsync(deleteRequest));
  };

  return (
    <div>
      <i className="fa-solid fa-trash" onClick={deletePlan}></i>
    </div>
  );
}
