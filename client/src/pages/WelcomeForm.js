import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { addUserAsync } from "../redux/users/thunks";

const WelcomeForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const dispatch = useDispatch();
  const { user } = useAuth0();

  return (
    <div>
      <h1>Hey, stranger! What should I call you?</h1>

      <form>
        <TextField
          required={true}
          id="outlined-basic"
          label="First name"
          variant="outlined"
          onChange={(event) => setFirstName(event.target.value)}
        />
        <TextField
          required={true}
          id="outlined-basic"
          label="Last name"
          variant="outlined"
          onChange={(event) => setLastName(event.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="success"
          onClick={(event) => {
            event.preventDefault();
            dispatch(
              addUserAsync({
                auth: user.sub,
                name_first: firstName,
                name_last: lastName,
                email: user.email,
                register_date: new Date(),
              })
            );
            window.location.reload();
          }}
        >
          Next
        </Button>
      </form>
    </div>
  );
};

export default WelcomeForm;
