import { useEffect } from "react";
import "./App.css";

// Import filesystem namespace
import { filesystem } from "@neutralinojs/lib";
import Dashboard from "./components/Dashboard";

function App() {
  // Log current directory or error after component is mounted
  useEffect(() => {
    filesystem
      .readDirectory("./")
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
