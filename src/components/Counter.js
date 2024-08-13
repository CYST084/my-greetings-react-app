import React, { useState } from "react";
import './counter.css';

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
    <div>
        <p className="count-greetings">Greetings.. {count}  times</p>
        <button onClick={increment} className="inc-btn">Increment</button>
    </div>
    );
}