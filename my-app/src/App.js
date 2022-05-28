import "./App.css";
import Tooltip from "./components/other/Tooltip";

function App() {
  return (
    <>
      <div className="p-16">
        <Tooltip text="Hover me">This is a tooltip content</Tooltip>
      </div>
    </>
  );
}

export default App;
