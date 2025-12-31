import { createBrowserRouter } from "react-router-dom";
import App from "./App";

// Nhóm Trang Chính
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Nhóm Bán Hàng
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderTracking from "./pages/OrderTracking";

// Nhóm Tài Khoản
import Login from "./pages/Login";
import Register from "./pages/Register";

// Khác
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // Trang chủ
      { index: true, element: <Home /> },

      // Mua sắm
      { path: "menu", element: <Menu /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "track", element: <OrderTracking /> },

      // Thông tin
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },

      // Tài khoản
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },

      // Lỗi 404
      { path: "*", element: <NotFound /> },
    ],
  },
]);
