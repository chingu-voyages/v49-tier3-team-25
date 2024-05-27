import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Signup } from "./pages/Signup";
import Signin from "./pages/Signin";
import OrderHistoryPage from "./pages/OrderHistoryPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/my-orders" element={<OrderHistoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
