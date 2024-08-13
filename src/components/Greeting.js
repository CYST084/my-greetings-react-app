import React, { useState } from "react";
import'./greeting.css';

export default function Greeting(props) {
    const [inputName, setInputName] = useState(''); // Initialize with an empty string

    const handleInputChange = (event) => {
        setInputName(event.target.value);   // Update inputName when the user types

    };

    return (
        <div>
            <input 
            type="text" 
            placeholder="Enter your name" 
            value={inputName} 
            onChange={handleInputChange} 
            className="input-field"
            />

            <p className="greetings">Hello, {inputName || props.name}!!</p> {/* Display inputName if available, otherwise use props.name */}
        </div>
    );
}
