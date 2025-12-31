import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-white text-gray-600 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* CỘT 1: THƯƠNG HIỆU (Đơn giản) */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex flex-col leading-none">
              <span className="text-xl font-oswald font-black tracking-tighter uppercase italic text-gray-900">
                MÌ CHUA <span className="text-primary">CAY</span>
              </span>
              <span className="text-[8px] tracking-[0.3em] text-gray-400 font-bold uppercase">
                Ẩm Thực Việt Nam
              </span>
            </Link>
            <p className="text-xs leading-relaxed max-w-xs text-gray-400">
              Hương vị đậm đà từ nguyên liệu tươi sạch mỗi ngày. Trải nghiệm ẩm
              thực Việt hiện đại.
            </p>
            {/* SOCIALS (Màu xám nhẹ) */}
            <div className="flex gap-3 mt-2">
              {[FaFacebookF, FaInstagram, FaTiktok].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition duration-300"
                >
                  <Icon size={12} />
                </a>
              ))}
            </div>
          </div>

          {/* CỘT 2: LIÊN KẾT NHANH */}
          <div>
            <h4 className="font-oswald text-sm font-bold uppercase tracking-[0.2em] text-gray-900 mb-6 italic">
              Khám Phá
            </h4>
            <ul className="space-y-3 text-xs font-medium uppercase tracking-wider">
              <li>
                <Link to="/" className="hover:text-primary transition">
                  Trang Chủ
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-primary transition">
                  Thực Đơn
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition">
                  Về Chúng Tôi
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition">
                  Liên Hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* CỘT 3: THÔNG TIN LIÊN HỆ (Gọn gàng) */}
          <div>
            <h4 className="font-oswald text-sm font-bold uppercase tracking-[0.2em] text-gray-900 mb-6 italic">
              Liên Hệ
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex flex-col gap-1">
                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">
                  Địa chỉ:
                </span>
                <span className="text-gray-800">
                  123 Đường Ẩm Thực, Quận 1, TP. HCM
                </span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">
                  Hotline:
                </span>
                <a
                  href="tel:0123456789"
                  className="text-gray-800 hover:text-primary transition font-bold"
                >
                  0123 456 789
                </a>
              </li>
            </ul>
          </div>

          {/* CỘT 4: GIỜ HOẠT ĐỘNG */}
          <div>
            <h4 className="font-oswald text-sm font-bold uppercase tracking-[0.2em] text-gray-900 mb-6 italic">
              Mở Cửa
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between border-b border-gray-50 pb-2">
                <span className="text-gray-400">T2 - T6:</span>
                <span className="text-gray-800 font-bold tracking-tighter">
                  10:00 - 21:00
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-50 pb-2">
                <span className="text-gray-400">T7 - CN:</span>
                <span className="text-gray-800 font-bold tracking-tighter">
                  09:00 - 22:00
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* BẢN QUYỀN (Minimal) */}
        <div className="mt-16 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] text-gray-300 uppercase tracking-[0.2em] font-bold text-center">
          <p>© {new Date().getFullYear()} MÌ CHUA CAY. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary transition">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-primary transition">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
