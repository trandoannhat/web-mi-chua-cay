import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Component hỗ trợ tự động cuộn lên đầu trang khi chuyển Route
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa]">
      <ScrollToTop />
      <Header />

      {/* Sử dụng flex-grow để Footer luôn nằm dưới cùng ngay cả khi trang ít nội dung 
        pt-20: Padding top để không bị Header (fixed) che mất nội dung
      */}
      <main className="flex-grow pt-16 md:pt-20">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
