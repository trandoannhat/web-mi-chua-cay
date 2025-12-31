import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useCartStore } from "../../store/cartStore";
import {
  HiMenu,
  HiX,
  HiOutlineUser,
  HiOutlineShoppingCart,
  HiPhone,
  HiOutlineSearch,
} from "react-icons/hi";

interface CartItem {
  qty: number;
}

export default function Header(): JSX.Element {
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null); // Để xử lý click ra ngoài thì đóng
  const cart = useCartStore((s) => s.cart) as CartItem[];
  const totalQty = cart.reduce((total, item) => total + item.qty, 0);

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Xử lý hiệu ứng scroll
  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Đóng ô tìm kiếm khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/menu?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white py-3 shadow-md border-b border-gray-100"
          : "bg-gradient-to-b from-black/50 to-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
        {/* TRÁI: HOTLINE */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:0123456789"
            className={`flex items-center gap-2 transition font-oswald text-[11px] font-bold tracking-[0.2em] ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          >
            <HiPhone className="text-lg text-primary" />
            <span>GỌI NGAY: 0123 456 789</span>
          </a>
        </div>

        {/* GIỮA: LOGO */}
        <div className="flex items-center lg:gap-10">
          <Link to="/" className="flex flex-col items-center leading-none">
            <span
              className={`text-2xl md:text-3xl font-oswald font-black tracking-tighter uppercase italic transition-colors ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              MÌ CHUA <span className="text-primary">CAY</span>
            </span>
          </Link>

          <nav
            className={`hidden lg:flex items-center gap-8 text-[12px] font-oswald font-bold uppercase tracking-widest transition-colors ${
              isScrolled ? "text-gray-600" : "text-white"
            }`}
          >
            <Link to="/" className="hover:text-primary transition">
              Trang Chủ
            </Link>
            <Link to="/menu" className="hover:text-primary transition italic">
              Thực Đơn
            </Link>
            <Link to="/about" className="hover:text-primary transition">
              Giới Thiệu
            </Link>
            <Link to="/contact" className="hover:text-primary transition">
              Liên Hệ
            </Link>
          </nav>
        </div>

        {/* PHẢI: ICONS */}
        <div
          className={`flex items-center gap-3 md:gap-4 ${
            isScrolled ? "text-gray-800" : "text-white"
          }`}
        >
          {/* Ô TÌM KIẾM NHỎ GỌN */}
          <div className="relative" ref={searchRef}>
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="hover:text-primary transition p-2 flex items-center"
            >
              {searchOpen ? (
                <HiX className="text-2xl" />
              ) : (
                <HiOutlineSearch className="text-2xl" />
              )}
            </button>

            {/* Dropdown Search */}
            <div
              className={`absolute right-0 mt-4 w-72 md:w-80 bg-white shadow-xl border border-gray-100 p-4 transition-all duration-300 transform origin-top-right ${
                searchOpen
                  ? "scale-100 opacity-100"
                  : "scale-95 opacity-0 pointer-events-none"
              }`}
            >
              <form onSubmit={handleSearch} className="relative">
                <input
                  autoFocus={searchOpen}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm món ăn..."
                  className="w-full bg-gray-50 border border-gray-200 py-2 pl-4 pr-10 text-sm text-gray-900 focus:border-primary focus:ring-1 focus:ring-primary outline-none font-sans"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary"
                >
                  <HiOutlineSearch className="text-xl" />
                </button>
              </form>
            </div>
          </div>

          <Link
            to="/login"
            className="hidden md:block hover:text-primary transition p-2"
          >
            <HiOutlineUser className="text-2xl" />
          </Link>

          <Link to="/cart" className="relative p-2">
            <HiOutlineShoppingCart className="text-2xl hover:text-primary transition" />
            {totalQty > 0 && (
              <span className="absolute top-0 right-0 bg-primary text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-sm">
                {totalQty}
              </span>
            )}
          </Link>

          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden hover:text-primary transition p-1"
          >
            <HiMenu className="text-3xl" />
          </button>
        </div>
      </div>

      {/* MOBILE MENU (Dạng Slide nhạt) */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-md z-[100] flex flex-col items-center justify-center transition-all duration-500 transform ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-8 right-8 text-gray-800 p-2"
        >
          <HiX className="text-4xl" />
        </button>
        <nav className="flex flex-col gap-10 text-center font-oswald text-gray-900 text-3xl font-black uppercase italic">
          <Link to="/" onClick={() => setMobileOpen(false)}>
            Trang Chủ
          </Link>
          <Link to="/menu" onClick={() => setMobileOpen(false)}>
            Thực Đơn
          </Link>
          <Link to="/about" onClick={() => setMobileOpen(false)}>
            Giới Thiệu
          </Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)}>
            Liên Hệ
          </Link>
        </nav>
      </div>
    </header>
  );
}
