import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Signup } from "./pages/Signup";
import Signin from "./pages/Signin";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Wrapper from "./pages/Wrapper";
import WishlistPage from "./pages/user-account/WishlistPage";
import UserAccountLayout from "./components/user-account/UserAccountLayout";
import ProfilePage from "./pages/user-account/ProfilePage";
import OrdersPage from "./pages/user-account/OrdersPage";
import OrderDetailPage from "./pages/user-account/OrderDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

          <Route path="/account" element={<UserAccountLayout />}>
            <Route index path="profile" element={<ProfilePage />} />
            <Route path="wishlist" element={<WishlistPage />} />
            <Route path="orders" element={<OrdersPage />} />
            <Route path="orders/:id" element={<OrderDetailPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
