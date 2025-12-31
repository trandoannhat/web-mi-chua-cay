import { useCartStore } from "../store/cartStore";
import { Link } from "react-router-dom";
import {
  //HiOutlineTrash,
  HiMinus,
  HiPlus,
  HiOutlineArrowLongLeft,
} from "react-icons/hi2";

export default function Cart() {
  // Giả định store của bạn có hàm add (tăng), remove (xóa) hoặc updateQty
  const { cart, add, remove } = useCartStore();

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#fafafa] px-6">
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-oswald font-black text-gray-200 uppercase tracking-tighter italic">
            Giỏ hàng trống
          </h2>
          <p className="text-gray-400 font-medium">
            Có vẻ như bạn chưa chọn món ăn nào.
          </p>
          <Link
            to="/menu"
            className="inline-block bg-primary text-white px-10 py-4 rounded-full font-oswald font-bold uppercase tracking-widest hover:bg-gray-900 transition-all shadow-lg shadow-primary/20"
          >
            Xem thực đơn ngay
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa] py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header trang */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-oswald font-black text-gray-900 uppercase tracking-tighter italic leading-none">
              GIỎ <span className="text-primary">HÀNG</span>
            </h1>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.3em] mt-2">
              Kiểm tra lại các món đã chọn
            </p>
          </div>
          <Link
            to="/menu"
            className="flex items-center gap-2 text-gray-400 hover:text-primary transition font-bold text-[10px] uppercase tracking-widest pb-1 border-b border-gray-200"
          >
            <HiOutlineArrowLongLeft size={18} />
            Tiếp tục mua sắm
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* DANH SÁCH MÓN ĂN (8 cột) */}
          <div className="lg:col-span-8 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 md:p-6 rounded-[32px] shadow-sm border border-gray-100 flex items-center gap-4 md:gap-6 group"
              >
                {/* Ảnh món */}
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-20 h-20 md:w-28 md:h-28 object-cover rounded-2xl group-hover:scale-105 transition duration-500"
                />

                {/* Thông tin */}
                <div className="flex-1 space-y-1">
                  <h3 className="font-oswald font-bold text-gray-900 uppercase tracking-tight text-sm md:text-base leading-tight italic">
                    {item.name}
                  </h3>
                  <p className="text-primary font-oswald font-black">
                    {item.price.toLocaleString("vi-VN")}đ
                  </p>
                </div>

                {/* Bộ điều khiển số lượng */}
                <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-100">
                  <button
                    onClick={() => remove(item.id)} // Giả sử remove sẽ giảm 1 nếu qty > 1
                    className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-lg transition text-gray-400 hover:text-primary"
                  >
                    <HiMinus size={14} />
                  </button>
                  <span className="w-8 text-center font-oswald font-bold text-gray-900 text-sm">
                    {item.qty}
                  </span>
                  <button
                    onClick={() => add(item)}
                    className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-lg transition text-gray-400 hover:text-primary"
                  >
                    <HiPlus size={14} />
                  </button>
                </div>

                {/* Giá tổng cho món này (Chỉ hiện trên desktop) */}
                <div className="hidden md:block text-right min-w-[100px]">
                  <p className="text-gray-900 font-oswald font-black text-lg">
                    {(item.price * item.qty).toLocaleString("vi-VN")}đ
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* TÓM TẮT THANH TOÁN (4 cột) */}
          <div className="lg:col-span-4">
            <div className="bg-white p-8 rounded-[32px] shadow-xl shadow-gray-200/50 border border-gray-100 sticky top-32">
              <h2 className="text-xl font-oswald font-black uppercase italic text-gray-900 tracking-tight mb-8">
                Tổng đơn hàng
              </h2>

              <div className="space-y-4 pb-8 border-b border-gray-50">
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
                    Giao hàng
                  </span>
                  <span className="text-gray-400 italic">Tính ở bước sau</span>
                </div>
              </div>

              <div className="flex justify-between py-6">
                <span className="font-oswald font-black uppercase italic text-lg text-gray-900">
                  Tổng cộng
                </span>
                <span className="font-oswald font-black text-2xl text-primary">
                  {subtotal.toLocaleString("vi-VN")}đ
                </span>
              </div>

              <Link
                to="/checkout"
                className="block w-full bg-gray-900 hover:bg-primary text-white text-center py-5 rounded-2xl font-oswald font-bold uppercase tracking-[0.2em] transition-all shadow-lg shadow-gray-200 active:scale-[0.98]"
              >
                Tiến hành thanh toán
              </Link>

              <p className="text-[10px] text-gray-400 text-center mt-6 uppercase font-bold tracking-tighter">
                Đảm bảo các món ăn đã đúng yêu cầu của bạn
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
