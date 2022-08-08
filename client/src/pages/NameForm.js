import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { addUserAsync } from "../redux/users/thunks";
import "../styles/nameForm/style.css";

const NameForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const dispatch = useDispatch();
  const { user } = useAuth0();

  return (
    <div className="page-container fade-in">
      <div className="welcome-container">
        <h1 className="greeting">Hello stranger, what's your name?</h1>
        <form>
          <div className="name-fields">
            <TextField
              margin="normal"
              required={true}
              id="outlined-basic"
              label="First name"
              variant="outlined"
              onChange={(event) => setFirstName(event.target.value)}
            />
            <br />
            <TextField
              margin="normal"
              required={true}
              id="outlined-basic"
              label="Last name"
              variant="outlined"
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>

          <Button
            className="submit-button"
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
              // window.location.reload();
            }}
          >
            Next
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NameForm;
