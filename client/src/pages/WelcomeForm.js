import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

const WelcomeForm = () => {
  const [name, setName ] = useState("");
  return (
    <div>
      <h1>Hey, stranger! What should I call you?</h1>

      <form>
        <TextField
          required={true}
          id="outlined-basic"
          label="Name"
          variant="outlined"
          placeholder="Enter preferred name"
          onChange={(event) => setName(event.target.value)}
        />
        <Button type="submit" variant="contained" color="success" onClick={(event) => {
            event.preventDefault();
            console.log("Name submitted! Hello " + name);
        }}>
          Next
        </Button>
      </form>
    </div>
  );
};

export default WelcomeForm;
