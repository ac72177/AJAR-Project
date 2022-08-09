import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { putPlanAsync } from "../../redux/plans/thunks";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useAuth0 } from "@auth0/auth0-react";
import "./../../styles/planModification/popup.css";

export default function AddAttachmentForm(props) {
    const plan = props.plan
    const [attachment, setAttachment] = useState("");
    const { user } = useAuth0();
    const dispatch = useDispatch();

    const addAttachment = (e) => {
        e.preventDefault();
        
        const newAttachments = [...plan.attachments]
        newAttachments.push(attachment)
        const data = {
            _id: plan._id,
            attachments: newAttachments,
            owner: user.sub,
        };

        dispatch(putPlanAsync(data))
    };
    return (
        <div className="popup-box">
            <div className="box">
                <Box
                    component="form"
                    sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" }, }}
                    autoComplete="on"
                >
                    <div>
                        <TextField
                            required
                            id="outlined-multiline-flexible"
                            label="New Attachment"
                            multiline
                            maxRows={4}
                            value={attachment}
                            onChange={(e) => {
                                setAttachment(e.target.value);
                            }}
                        />
                    </div>
                    <br></br>
                    <div className="buttons">
                        <input type="submit" value="Exit" onClick={props.handleClose}></input>
                        <input type="submit" value="Save" onClick={addAttachment}></input>
                    </div>
                </Box>
            </div>
        </div>
    );
}
