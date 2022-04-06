import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        console.log('Increment')
    }
    return (
        <div onClick={handleIncrement}>
            Increment
        </div>
    );
};

export default Counter;