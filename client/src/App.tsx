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
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import BookDetail from "./pages/BookDetail";
import ScrollToTop from "./hooks/useScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Wrapper />}>
            <Route index element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:title" element={<BookDetail />} />

            <Route path="/account" element={<UserAccountLayout />}>
              <Route index path="profile" element={<ProfilePage />} />
              <Route path="wishlist" element={<WishlistPage />} />
              <Route path="orders" element={<OrdersPage />} />
              <Route path="orders/:id" element={<OrderDetailPage />} />
            </Route>
          </Route>
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
