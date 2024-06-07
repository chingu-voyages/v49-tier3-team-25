import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Signup } from "./pages/Signup";
import Signin from "./pages/Signin";
import Admin from "./pages/admin";
import Dashboard from "./pages/admin/dashboard";
import OrderManagement from "./pages/admin/orderManagement";
import Customers from "./pages/admin/customers";
import CustomerDetail from "./pages/admin/customers/CustomerDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/admin" element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route index path="order-management" element={<OrderManagement />} />
          <Route index path="customers" element={<Customers />} />
          <Route path="customers/:name" element={<CustomerDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
