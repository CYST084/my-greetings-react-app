import React, { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
    <div>
        <p>Greetings.. {count}  times</p>
        <button onClick={increment}>Increment</button>
    </div>
    );
}