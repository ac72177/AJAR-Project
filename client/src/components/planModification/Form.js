import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPlanAsync, putPlanAsync } from "../../redux/plans/thunks";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useAuth0 } from "@auth0/auth0-react";

export default function Form(props) {
  let plan = initializePlan();
  const { v4: uuid } = require("uuid");
  const [planName, setName] = useState(plan.name);
  const [labels, setLabels] = useState(plan.labels);
  const [startDate, setStart] = useState(plan.startDate);
  const [dueDate, setEnd] = useState(plan.dueDate);
  const [description, setDescription] = useState(plan.description);
  const [tasks, setTasks] = useState(plan.plans);
  const { user } = useAuth0();
  const dispatch = useDispatch();

  function initializePlan() {
    let currPlan = props.currPlan;
    if (currPlan == undefined) {
      return {
        name: "",
        startDate: "",
        dueDate: "",
        description: "",
        labels: "",
        plans: "",
      };
    } else {
      let existingLabels = currPlan.labels.join(",");

      let existingTasks = "";
      for (let i = 0; i < currPlan.plans.length; i++) {
        if (existingTasks == "") {
          existingTasks = currPlan.plans[i].name;
        } else {
          existingTasks = existingTasks + ", " + currPlan.plans[i].name;
        }
      }
      return {
        name: currPlan.name,
        startDate: currPlan.startDate,
        dueDate: currPlan.dueDate,
        description: currPlan.description,
        labels: existingLabels,
        plans: existingTasks,
      };
    }
  }

  const savePlan = (e) => {
    e.preventDefault();

    if (tasks == "") {
      setTasks("Completed");
    }

    let subplans = tasks.split(",");
    let subplanObjects = [];
    for (let i = 0; i < subplans.length; i++) {
      let subplanObject = {
        _id: uuid(),
        name: subplans[i],
        isComplete: false,
      };
      subplanObjects.push(subplanObject);
    }

    const data = {
      _id: props.id,
      name: planName,
      labels: labels.split(","),
      startDate: startDate,
      dueDate: dueDate,
      description: description,
      plans: subplanObjects,
      owner: user.sub,
    };

    dispatch({ type: "filters/labelFilterChanged", payload: "All" });

    if (props.put) {
      dispatch(putPlanAsync(data));
    } else {
      dispatch(addPlanAsync(data));
    }
  };

  return (
    // https://mui.com/material-ui/react-text-field/
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-multiline-flexible"
          label="Name"
          multiline
          maxRows={4}
          value={planName}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        {/* https://mui.com/x/react-date-pickers/date-picker/ */}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            required
            label="Start Date"
            value={startDate}
            onChange={(startDate) => {
              setStart(startDate);
            }}
            inputFormat="yyyy-MM-dd"
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            required
            label="Due Date"
            value={dueDate}
            onChange={(dueDate) => {
              // TODO error if its before the start date
              setEnd(dueDate);
            }}
            inputFormat="yyyy-MM-dd"
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>
      <div>
        <TextField
          id="filled-multiline-flexible"
          label="Description"
          multiline
          maxRows={4}
          value={description}
          placeholder="Enter Description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          variant="filled"
        />
        <TextField
          id="filled-multiline-flexible"
          label="Labels"
          multiline
          required
          maxRows={4}
          value={labels}
          placeholder="Cooking, Exercise, Summer"
          onChange={(e) => {
            setLabels(e.target.value);
          }}
          variant="filled"
        />

        <TextField
          id="filled-multiline-flexible"
          label="Tasks"
          multiline
          maxRows={4}
          value={tasks}
          placeholder="Visit Costco, Invite Friends, Cleanup House"
          onChange={(e) => {
            setTasks(e.target.value);
          }}
        />
      </div>
      <br></br>
      <div className="buttons">
        <input type="submit" value="Exit" onClick={props.handleClose}></input>
        <input type="submit" value="Save" onClick={savePlan}></input>
      </div>
    </Box>
  );
}
