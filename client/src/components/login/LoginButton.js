import React from "react";
import Button from "@mui/material/Button";
import { useAuth0 } from "@auth0/auth0-react";
import "../../styles/landing/style.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      variant="contained"
      color="info"
      sx={{ margin: 1, marginBottom: 3 }}
      onClick={() => loginWithRedirect()}
    >
      Login
    </Button>
  );
};

export default LoginButton;
