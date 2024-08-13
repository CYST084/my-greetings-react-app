import React, { useState } from "react";

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
            />

            <p>Hello, {inputName || props.name}!!</p> {/* Display inputName if available, otherwise use props.name */}
        </div>
    );
}
