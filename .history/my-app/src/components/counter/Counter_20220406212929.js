import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div onClick={handleIncr}>
            Increment
        </div>
    );
};

export default Counter;