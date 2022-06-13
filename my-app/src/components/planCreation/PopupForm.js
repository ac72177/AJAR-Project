import React from "react";
import Form from '../planCreation/Form'
import "./../../styles/planCreation/popup.css"

export default function PopupForm(props) {
  return (
    <div className="popup-box" onClick={props.handleClose}>
      <div className="box">
        <Form />
      </div>
    </div>
  );
};