import { useState } from "react";
import AddAttachmentForm from "./AddAttachmentForm";


export default function AddAttachmentButton(props) {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {isOpen && <AddAttachmentForm plan={props.plan} handleClose={togglePopup} />}
            {/* <button className="button" onClick={togglePopup}>
                New Attachment
            </button> */}
            <IconButton aria-label="Add Attachment" onClick={togglePopup}>
                <CheckIcon color="success" />
            </IconButton>
        </div>
    );
}
