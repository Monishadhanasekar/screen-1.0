import React, { useState } from "react";
import ToolBar from "./ToolBar";
import Sidebar from "./Sidebar";
import Backdrop from "./Backdrop";

function App() {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState);
  };

  return (
    <>
      <div>
        <ToolBar openSidebar={toggleSidebar} />
        <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar} />
        <Sidebar sidebar={sidebar} closeSidebar={toggleSidebar} />
      </div>
    </>
  );
}

export default App;
