import React, { useState } from "react";
import useClickOutSide from "../../hooks/useClickOutSide";
import ReactDOM from "react-dom";

const DropdownPortal = () => {
  const { show, setShow, nodeRef } = useClickOutSide();
  const [coords, setCoords] = useState({});
  const handleClick = (e) => {
    console.log(nodeRef.current.getBoundingClientRect());
    setCoords(nodeRef.current.getBoundingClientRect());
    setShow(!show);
  };
  return (
    <div className="relative w-full max-w-[400px]" ref={nodeRef}>
      <div
        className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer"
        onClick={handleClick}
      >
        Selected
      </div>
      {show && <DropdownList coords={coords} />}
    </div>
  );
};
function DropdownList({ coords }) {
  if (typeof document === "undefined") return null;
  return ReactDOM.createPortal(
    <div
      className="border border-gray-200 rounded-lg absolute left-0 top-full w-full bg-white"
      style={{
        left: coords.left,
        top: coords.top + coords.height + window.scrollY,
        width: coords.width,
      }}
    >
      <div className="p-5 cursor-pointer ">JavaScript</div>
      <div className="p-5 cursor-pointer ">ReactJS</div>
      <div className="p-5 cursor-pointer ">VueJS</div>
    </div>,
    document.querySelector("body")
  );
}
export default DropdownPortal;
