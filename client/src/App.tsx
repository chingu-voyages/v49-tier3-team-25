import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Signup } from "./pages/Signup";
import Signin from "./pages/Signin";
import Admin from "./pages/admin";
import Dashboard from "./pages/admin/dashboard";
import OrderManagement from "./pages/admin/orderManagement";
import Customers from "./pages/admin/customers";
import CustomerDetail from "./pages/admin/customers/CustomerDetail";
import Products from "./pages/admin/products";
import ProductDetail from "./pages/admin/products/ProductDetail";
import AddNew from "./pages/admin/products/AddNew";

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
          <Route index path="products" element={<Products />} />
          <Route path="products/:title" element={<ProductDetail />} />
          <Route path="products/add" element={<AddNew />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
