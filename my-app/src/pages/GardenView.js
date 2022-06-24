import React from 'react'
import { useState } from 'react'


export default function CreatePlanButton() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <button className="button" onClick={togglePopup}>
                Delete
            </button>
        </div>
    );
}