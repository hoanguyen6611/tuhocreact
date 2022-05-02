import React from 'react';
import useClickOutSide from '../hooks/useClickOutSide';

const Dropdown = () => {
    const {
        show,
        setShow,
        nodeRef
    } = useClickOutSide();
    return (
        <div className="relative w-full max-w-[400px]" ref={nodeRef}>
            <div className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer"
            onClick = {()=>setShow(!show)}
            >Selected</div>
            {show &&(
            <div className="border border-gray-200 rounded-lg absolute left-0 top-full w-full bg-white">
                <div className="p-5 cursor-pointer ">JavaScript</div>
                <div className="p-5 cursor-pointer ">ReactJS</div>
                <div className="p-5 cursor-pointer ">VueJS</div>
            </div>)}
        </div>
    );
};

export default Dropdown;