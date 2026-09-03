import { useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div className="relative">
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;
