import { useEffect, useRef, useState } from "react";

export default function useClickOutSide(){
    const [show, setShow] = useState(false);
    const nodeRef = useRef(null);
    useEffect(() =>{
        function dropdownClickOutDropdown(e){
            if (nodeRef.current && !nodeRef.current.contains(e.target)){
                setShow(false);
            }
        }
        document.addEventListener("click",dropdownClickOutDropdown);
        return ()=>{
            document.removeEventListener("click",dropdownClickOutDropdown);
        }
    },[]);
    return {
        show,
        setShow,
        nodeRef
    }
}