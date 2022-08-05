import React from "react";
import PopupForm from "./PopupForm";
import { useState } from "react";

export default function CreateSubplanButton(props) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen && <PopupForm put={false} currPlan={props.currPlan} handleClose={togglePopup} subplan={true}/>}
      <button className="button" onClick={togglePopup}>
        New Subplan
      </button>
    </div>
  );
}
