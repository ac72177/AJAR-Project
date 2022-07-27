import React from "react";
import Form from "./Form";
import "./../../styles/planModification/popup.css";

export default function PopupForm(props) {
  return (
    <div className="popup-box">
      <div className="box">
        <Form id={props.id} put={props.put} handleClose={props.handleClose} />
      </div>
    </div>
  );
}
