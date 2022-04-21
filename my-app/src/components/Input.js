import React, { useEffect, useRef } from 'react';

const Input = () => {
    // const inputRef = useRef();
    const divRef = useRef();
    useEffect(() => {
        console.log(divRef.current)
    },[])
    return (
        <div className="input-div" ref={divRef}>
            
        </div>
    );
};

export default Input;