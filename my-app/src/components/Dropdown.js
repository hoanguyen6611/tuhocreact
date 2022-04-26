import React, { useEffect, useRef, useState } from 'react';

const Dropdown = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    useEffect(() =>{
        function dropdownClickOutDropdown(e){
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)){
                setShowDropdown(false);
            }
        }
        document.addEventListener("click",dropdownClickOutDropdown);
        return ()=>{
            document.removeEventListener("click",dropdownClickOutDropdown);
        }
    },[])
    return (
        <div className="relative w-full max-w-[400px]" ref={dropdownRef}>
            <div className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer"
            onClick = {()=>setShowDropdown(!showDropdown)}
            >Selected</div>
            {showDropdown &&(
            <div className="border border-gray-200 rounded-lg absolute left-0 top-full w-full bg-white">
                <div className="p-5 cursor-pointer ">JavaScript</div>
                <div className="p-5 cursor-pointer ">ReactJS</div>
                <div className="p-5 cursor-pointer ">VueJS</div>
            </div>)}
        </div>
    );
};

export default Dropdown;