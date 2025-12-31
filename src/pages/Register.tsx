import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineLockClosed,
} from "react-icons/hi";

export default function Register(): JSX.Element {
  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center px-6 py-24">
      <div className="max-w-md w-full bg-white rounded-[32px] shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100">
        <div className="p-10">
          <div className="text-center mb-10">
            <h2 className="font-oswald font-black text-4xl text-gray-900 uppercase italic tracking-tighter">
              ĐĂNG <span className="text-primary">KÝ</span>
            </h2>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-2">
              Tạo tài khoản mới ngay!
            </p>
          </div>

          <form className="space-y-5">
            {/* Name Input */}
            <div className="relative">
              <HiOutlineUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="text"
                placeholder="Họ và tên"
                className="w-full bg-gray-50 border border-gray-100 py-4 pl-12 pr-4 rounded-2xl outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm font-medium"
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <HiOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="email"
                placeholder="Email đăng ký"
                className="w-full bg-gray-50 border border-gray-100 py-4 pl-12 pr-4 rounded-2xl outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm font-medium"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <HiOutlineLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="password"
                placeholder="Mật khẩu"
                className="w-full bg-gray-50 border border-gray-100 py-4 pl-12 pr-4 rounded-2xl outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm font-medium"
              />
            </div>

            <p className="text-[11px] text-gray-400 text-center leading-relaxed italic">
              Bằng cách đăng ký, bạn đồng ý với{" "}
              <span className="text-gray-600 font-bold">
                Chính sách & Điều khoản
              </span>{" "}
              của chúng tôi.
            </p>

            <button className="w-full bg-primary hover:bg-gray-900 text-white font-oswald font-bold py-4 rounded-2xl uppercase tracking-[0.2em] transition-all shadow-lg shadow-primary/20 transform active:scale-[0.98]">
              Tạo Tài Khoản
            </button>
          </form>

          <div className="mt-10 text-center">
            <p className="text-sm text-gray-500">
              Đã có tài khoản?{" "}
              <Link
                to="/login"
                className="text-primary font-bold hover:underline underline-offset-4"
              >
                Đăng nhập ngay
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
