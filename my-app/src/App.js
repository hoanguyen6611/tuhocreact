import { useState } from "react";
import "./App.css";
import Modal from './components/modal/Modal';
// import DropdownPortal from "./components/other/DropdownPortal";
// import Tooltip from "./components/other/Tooltip";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div>
        <Modal open={showModal} handleClose={() => setShowModal(false)}></Modal>
      </div>
      <button
        className="p-4 text-white bg-blue-500 rounded-md m-5"
        onClick={() => setShowModal(true)}
      >
        Show modal
      </button>
      <div className="relative z-30 m-5">
        Lorem ipsum dolor sit amet, consectetur adip
      </div>
      {/* <div className="overflow-hidden m-5">
      <DropdownPortal></DropdownPortal>
      </div> */}
      {/* <div className="m-10">
        <Tooltip></Tooltip>
      </div> */}
    </>
  );
}

export default App;
