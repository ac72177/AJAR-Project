import { useState } from "react";

import IconButton from '@mui/material/IconButton';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

import AddAttachmentForm from "./AddAttachmentForm";


export default function AddAttachmentButton(props) {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {isOpen && <AddAttachmentForm plan={props.plan} handleClose={togglePopup} />}
            <IconButton aria-label="Add Attachment" onClick={togglePopup}>
                <AddBoxOutlinedIcon />
            </IconButton>
        </div>
    );
}
