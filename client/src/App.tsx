import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Signup } from "./pages/Signup";
import Signin from "./pages/Signin";
import { Home } from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
