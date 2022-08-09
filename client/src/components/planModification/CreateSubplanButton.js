import React from "react";
import PopupForm from "./PopupForm";
import { useState } from "react";
import IconButton from '@mui/material/IconButton';

import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

export default function CreateSubplanButton(props) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen && <PopupForm put={false} currPlan={props.currPlan} handleClose={togglePopup} subplan={true} />}
      <IconButton aria-label="Add Task" onClick={togglePopup}>
        <AddBoxOutlinedIcon />
      </IconButton>
    </div>
  );
}
