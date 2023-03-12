import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movie from "./pages/Movie";
import Tv from "./pages/Tv";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/movie" element={<Movie />} />
        <Route exact path="/tv" element={<Tv />} />
      </Routes>
      <Sidebar />
    </Router>
  );
}

export default App;
