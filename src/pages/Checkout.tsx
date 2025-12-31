import { useCartStore } from "../store/cartStore";
import {
  HiOutlineChevronLeft,
  HiOutlineCreditCard,
  HiOutlineTruck,
  HiOutlineCash,
} from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Checkout() {
  const { cart } = useCartStore();

  // Tính toán tiền dựa trên dữ liệu thật từ Store
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
  const shippingFee = 25000; // Phí ship giả định
  const total = subtotal + shippingFee;

  return (
    <div className="min-h-screen bg-[#fafafa] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Quay lại giỏ hàng */}
        <Link
          to="/cart"
          className="flex items-center gap-2 text-gray-400 hover:text-primary transition mb-8 text-sm font-bold uppercase tracking-widest"
        >
          <HiOutlineChevronLeft className="text-xl" />
          <span>Quay lại giỏ hàng</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* CỘT TRÁI: THÔNG TIN (8 CỘT) */}
          <div className="lg:col-span-7 space-y-8">
            {/* 1. THÔNG TIN GIAO HÀNG */}
            <section className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <HiOutlineTruck size={24} />
                </div>
                <h2 className="text-xl font-oswald font-black uppercase italic text-gray-900 tracking-tight">
                  Thông tin giao hàng
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Họ và tên"
                  className="col-span-1 md:col-span-2 w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl outline-none focus:border-primary transition-all text-sm"
                />
                <input
                  type="text"
                  placeholder="Số điện thoại"
                  className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl outline-none focus:border-primary transition-all text-sm"
                />
                <input
                  type="email"
                  placeholder="Email (không bắt buộc)"
                  className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl outline-none focus:border-primary transition-all text-sm"
                />
                <input
                  type="text"
                  placeholder="Địa chỉ giao hàng (Số nhà, tên đường...)"
                  className="col-span-1 md:col-span-2 w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl outline-none focus:border-primary transition-all text-sm"
                />
                <textarea
                  rows={3}
                  placeholder="Ghi chú đơn hàng (ví dụ: không lấy hành, cay nhiều...)"
                  className="col-span-1 md:col-span-2 w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl outline-none focus:border-primary transition-all text-sm resize-none"
                ></textarea>
              </div>
            </section>

            {/* 2. PHƯƠNG THỨC THANH TOÁN */}
            <section className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <HiOutlineCreditCard size={24} />
                </div>
                <h2 className="text-xl font-oswald font-black uppercase italic text-gray-900 tracking-tight">
                  Thanh toán
                </h2>
              </div>

              <div className="space-y-3">
                <label className="flex items-center justify-between p-4 rounded-2xl border-2 border-primary bg-primary/5 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <HiOutlineCash size={24} className="text-primary" />
                    <span className="text-sm font-bold text-gray-900 uppercase tracking-tight">
                      Thanh toán khi nhận hàng (COD)
                    </span>
                  </div>
                  <input
                    type="radio"
                    name="payment"
                    defaultChecked
                    className="accent-primary w-4 h-4"
                  />
                </label>

                <label className="flex items-center justify-between p-4 rounded-2xl border-2 border-gray-50 bg-gray-50/50 cursor-not-allowed opacity-60">
                  <div className="flex items-center gap-4">
                    <HiOutlineCreditCard size={24} className="text-gray-400" />
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-tight">
                      Chuyển khoản (Đang bảo trì)
                    </span>
                  </div>
                  <input
                    type="radio"
                    name="payment"
                    disabled
                    className="accent-primary w-4 h-4"
                  />
                </label>
              </div>
            </section>
          </div>

          {/* CỘT PHẢI: TÓM TẮT ĐƠN HÀNG (4 CỘT) */}
          <div className="lg:col-span-5">
            <div className="bg-white p-8 rounded-[32px] shadow-lg shadow-gray-200/50 border border-gray-100 sticky top-32">
              <h2 className="text-xl font-oswald font-black uppercase italic text-gray-900 tracking-tight mb-8">
                Đơn hàng của bạn
              </h2>

              {/* Danh sách món ăn */}
              <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 mb-8">
                {cart.length > 0 ? (
                  cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <div className="relative">
                        <img
                          src={item.imageUrl}
                          className="w-16 h-16 object-cover rounded-xl"
                          alt={item.name}
                        />
                        <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                          {item.qty}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xs font-bold text-gray-900 uppercase tracking-tighter line-clamp-1">
                          {item.name}
                        </h4>
                        <p className="text-xs text-gray-400">
                          {item.price.toLocaleString("vi-VN")}đ
                        </p>
                      </div>
                      <span className="text-sm font-bold text-gray-900">
                        {(item.price * item.qty).toLocaleString("vi-VN")}đ
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-400 italic">
                    Giỏ hàng đang trống...
                  </p>
                )}
              </div>

              {/* Tính tiền */}
              <div className="space-y-3 pt-6 border-t border-gray-100">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400 uppercase font-bold tracking-widest text-[10px]">
                    Tạm tính
                  </span>
                  <span className="text-gray-900 font-bold">
                    {subtotal.toLocaleString("vi-VN")}đ
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400 uppercase font-bold tracking-widest text-[10px]">
                    Phí vận chuyển
                  </span>
                  <span className="text-gray-900 font-bold">
                    {shippingFee.toLocaleString("vi-VN")}đ
                  </span>
                </div>
                <div className="flex justify-between pt-4 border-t border-gray-100">
                  <span className="font-oswald font-black uppercase italic text-lg">
                    Tổng cộng
                  </span>
                  <span className="font-oswald font-black text-2xl text-primary">
                    {total.toLocaleString("vi-VN")}đ
                  </span>
                </div>
              </div>

              <button className="w-full bg-primary hover:bg-gray-900 text-white font-oswald font-bold py-5 rounded-2xl uppercase tracking-[0.2em] transition-all mt-8 shadow-lg shadow-primary/20 transform active:scale-[0.98]">
                Xác nhận đặt hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
