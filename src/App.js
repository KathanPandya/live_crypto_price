import { Outlet } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";

const App = () => {
  return (
    <div>
      <AppNavbar />
      <Outlet />
    </div>
  );
};

export default App;
