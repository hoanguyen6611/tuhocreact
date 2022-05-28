import React, { useState } from "react";
import useHover from "../../hooks/useHover";
import ReactDOM from "react-dom";

const Tooltip = ({ children, text }) => {
  const { hovered, nodeRef } = useHover();
  const [coords, setCoords] = useState({});
  const handleHover = (e) => {
    setCoords(e.target.getBoundingClientRect());
  };
  return (
    <div className="">
      {hovered && (
        <TooltipContent
          children={children}
          coords={coords}
          handleHover={handleHover}
        />
      )}
      <span className="font-semibold" ref={nodeRef} onMouseOver={handleHover}>
        {text}
      </span>
    </div>
  );
};
function TooltipContent({ children, coords }) {
  return ReactDOM.createPortal(
    <p
      className="absolute p-3 bg-black text-white rounded-xl inline-block -translate-y-full max-w-[200px] -translate-x-2/4"
      style={{
        top: coords.top - coords.height / 2 + window.scrollY,
        left: coords.left + coords.width/2,
      }}
    >
      {children}
    </p>,
    document.querySelector("body")
  );
}

export default Tooltip;
