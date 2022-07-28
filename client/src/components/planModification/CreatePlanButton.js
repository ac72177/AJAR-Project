import React from 'react'
import PopupForm from './PopupForm'
import { useState } from 'react'


export default function CreatePlanButton() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            {isOpen && <PopupForm put={false} handleClose={togglePopup}/> }
            <button className="button" onClick={togglePopup}>
                New Plan
            </button>
        </div>
    );
}