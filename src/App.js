import Button from "@mui/material/Button";
import "./app.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <h1>Material UI</h1>
      <p>
        lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet
        lorem et lorem ipsum dolor sit amet
      </p>
      <Button variant="contained">Hello world</Button>
    </div>
  );
}

export default App;
