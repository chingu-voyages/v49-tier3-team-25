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
import Contact from "./pages/Contact";
import About from "./pages/About";
import Wrapper from "./pages/Wrapper";
import WishlistPage from "./pages/user-account/WishlistPage";
import UserAccountLayout from "./components/user-account/UserAccountLayout";
import ProfilePage from "./pages/user-account/ProfilePage";
import OrdersPage from "./pages/user-account/OrdersPage";
import OrderDetailPage from "./pages/user-account/OrderDetailPage";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import BookDetail from "./pages/BookDetail";
import ScrollToTop from "./hooks/useScrollToTop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { ReduxProvider } from "./redux/provider";
import ProtectedRoute from "./pages/ProtectedRoute";
import AdminSignin from "./pages/admin/AdminSignin";
import { AdminRegister } from "./pages/admin/AdminRegister";
import OrderDetails from "./pages/admin/orderManagement/OrderDetails";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <ReduxProvider>
          {/* bookstore routes */}
          <Routes>
            <Route path="/" element={<Wrapper />}>
              <Route index element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/:title" element={<BookDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />

              <Route path="/account" element={<ProtectedRoute />}>
                <Route path="/account" element={<UserAccountLayout />}>
                  <Route index path="profile" element={<ProfilePage />} />
                  <Route path="wishlist" element={<WishlistPage />} />
                  <Route path="orders" element={<OrdersPage />} />
                  <Route path="orders/:id" element={<OrderDetailPage />} />
                </Route>
              </Route>
            </Route>
            {/* admin dashboard routes */}
            <Route path="/admin" element={<Admin />}>
              <Route index element={<Dashboard />} />
              <Route path="signup" element={<AdminRegister />} />
              <Route path="signin" element={<AdminSignin />} />
              <Route index path="orders" element={<OrderManagement />} />
              <Route path="orders/:id" element={<OrderDetails />} />
              <Route index path="customers" element={<Customers />} />
              <Route path="customers/:name" element={<CustomerDetail />} />
              <Route index path="products" element={<Products />} />
              <Route path="products/:id" element={<ProductDetail />} />
              <Route path="products/add" element={<AddNew />} />
            </Route>
          </Routes>
        </ReduxProvider>
      </ScrollToTop>
    </Router>
  );
}

export default App;
