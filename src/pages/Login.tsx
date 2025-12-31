import { Link } from "react-router-dom";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";

export default function Login(): JSX.Element {
  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center px-6 py-24">
      <div className="max-w-md w-full bg-white rounded-[32px] shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100">
        <div className="p-10">
          {/* Header của Form */}
          <div className="text-center mb-10">
            <h2 className="font-oswald font-black text-4xl text-gray-900 uppercase italic tracking-tighter">
              ĐĂNG <span className="text-primary">NHẬP</span>
            </h2>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-2">
              Mừng bạn quay trở lại!
            </p>
          </div>

          <form className="space-y-5">
            {/* Email Input */}
            <div className="relative">
              <HiOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="email"
                placeholder="Email của bạn"
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

            <div className="text-right">
              <a
                href="#"
                className="text-xs font-bold text-gray-400 hover:text-primary transition uppercase tracking-tighter"
              >
                Quên mật khẩu?
              </a>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-gray-900 hover:bg-primary text-white font-oswald font-bold py-4 rounded-2xl uppercase tracking-[0.2em] transition-all shadow-lg shadow-gray-200 transform active:scale-[0.98]">
              Đăng Nhập Ngay
            </button>
          </form>

          {/* Footer của Form */}
          <div className="mt-10 text-center">
            <p className="text-sm text-gray-500">
              Chưa có tài khoản?{" "}
              <Link
                to="/register"
                className="text-primary font-bold hover:underline underline-offset-4"
              >
                Đăng ký tại đây
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
