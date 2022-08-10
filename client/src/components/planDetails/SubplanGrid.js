import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { red } from "@mui/material/colors";
import { useDispatch } from "react-redux";
import { putPlanAsync } from "../../redux/plans/thunks";
import { useAuth0 } from "@auth0/auth0-react";

import { stringToDate } from "../../utils/dateFormat";

export default function SubPlanGrid(props) {
  const rows = props.plan.plans;
  const { user } = useAuth0();
  const dispatch = useDispatch();

  const checkBox = (plan, subplan) => {
    let tasks = plan.plans;
    let data = [...tasks];
    let task = {
      _id: subplan._id,
      name: subplan.name,
      isComplete: !subplan.isComplete,
    };

    let index = tasks.findIndex((task) => task._id === subplan._id);

    data[index] = task;

    let checkComplete;
    for (let i = 0; i < plan.plans.length; i++) {
      if (data[i].isComplete == true) {
        checkComplete = true;
      } else {
        checkComplete = false;
        break;
      }
    }

    console.log("Complete:" + checkComplete);

    let request = {
      _id: plan._id,
      plans: data,
      isComplete: checkComplete,
      owner: user.sub,
    };

    dispatch(putPlanAsync(request));
  };

  const columns = [
    { field: "name", headerName: "Name", width: 200 },
    {
      field: "isComplete",
      headerName: "Done?",
      width: 60,
      renderCell: (params) => {
        if (params.value) {
          return (
            <div>
              <IconButton
                aria-label="Check"
                onClick={() => checkBox(props.plan, params.row)}
              >
                <CheckIcon color="success" />
              </IconButton>
            </div>
          );
        } else {
          return (
            <div>
              <IconButton
                aria-label="Clear"
                onClick={() => checkBox(props.plan, params.row)}
              >
                <ClearIcon sx={{ color: red[300] }} />
              </IconButton>
            </div>
          );
        }
      },
    },
  ];

  return (
    <Box sx={{ height: 400, width: "40%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        getRowId={(row) => row._id}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </Box>
  );
}
