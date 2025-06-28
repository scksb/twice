import "./App.css";
import Theader from "./Theader";
import Tsider from "./Tsider";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="h-screen flex flex-col ">
      <Theader></Theader>

      <div className="flex  h-screen">
        <Tsider></Tsider>

        <div className="text-center m-auto ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
