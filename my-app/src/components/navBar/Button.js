import React from 'react'
import { useState } from 'react'

export default function Button() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>            
            {/* {isOpen && <Form handleClose={togglePopup}/> } */}
            <button class="btn" icon="table" onClick={togglePopup}></button>
        </div>
    );
}