import React from "react";
import Button from "@mui/material/Button";
import "../../styles/landing/style.css";
import { useAuth0 } from "@auth0/auth0-react";

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      variant="contained"
      color="info"
      sx={{ margin: 1, marginBottom: 3 }}
      onClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
        })
      }
    >
      Register
    </Button>
  );
};

export default SignupButton;
