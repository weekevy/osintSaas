
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Home from "./components/Home.jsx";
import Welcome from "./components/Welcom.jsx";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        {/*<Route path="/home" element={<Home />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

