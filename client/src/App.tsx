import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Signup } from "./pages/Signup";
import Signin from "./pages/Signin";
import Wrapper from "./pages/Wrapper";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
