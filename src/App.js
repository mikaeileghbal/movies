import { Grid } from "@mui/material";
import "./app.css";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

function App() {
  return (
    <Grid container>
      <Grid item>
        <Sidebar />
      </Grid>
      <Grid item>
        <Home />
      </Grid>
    </Grid>
  );
}

export default App;
