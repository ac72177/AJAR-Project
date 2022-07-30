import React from "react";
import PopupForm from "./PopupForm";
import { useState } from "react";

export default function EditPlanButton(props) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen && (
        <PopupForm
          id={props.id}
          put={true}
          currPlan={props.currPlan}
          handleClose={togglePopup}
        />
      )}
      <i className="fa-solid fa-pen-to-square" onClick={togglePopup}></i>
    </div>
  );
}
