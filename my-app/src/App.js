import { useState } from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import SidebarMenu from './components/SidebarMenu';
import useClickOutSide from './hooks/useClickOutSide';

function App() {
  const {
    show,
    setShow,
    nodeRef
  } = useClickOutSide("button");
  return (
    <div className="p-5">
      <button className="inline-block m-3 p-3 rounded-lg text-white bg-green-400"
        onClick={() => setShow(true)}
      >Show menu</button>
      <SidebarMenu show={show} ref={nodeRef}></SidebarMenu>
      <Dropdown></Dropdown>
    </div>
  );
}

export default App;
