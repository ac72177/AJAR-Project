import { useAuth0 } from "@auth0/auth0-react";
import "react-toastify/dist/ReactToastify.css";

import { notifyOnSuccess, notifyOnFail } from "../../utils/toastNotifications";

export default function InviteButton(props) {
  const currPlan = props.plan;
  const { user } = useAuth0();

  async function invite() {
    const body = {
      planId: currPlan._id,
      sender: user.sub,
    };

    const response = await fetch("/api/invites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      const errorMsg = data?.message;
      notifyOnFail("Couldn't create an invitation to this plan.");
      return;
    }
    const inviteId = data.inviteId;
    navigator.clipboard.writeText(inviteId);
    notifyOnSuccess(
      `Invitation ID copied to clipboard! Send this ID to your friend so they can redeem it on the "Share" page!`
    );
  }
  return (
    <button
      className="button"
      onClick={() => {
        invite();
      }}
    >
      Invite others to this plan
    </button>
  );
}
