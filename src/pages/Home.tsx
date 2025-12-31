import { Link } from "react-router-dom";
import { popularProducts } from "../services/home.api";
import ProductCard from "../components/product/ProductCard";

export default function Home() {
  return (
    <>
      {/* HERO SECTION - Tối giản & Tập trung vào món ăn */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-gray-50">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=1964"
            className="w-full h-full object-cover"
            alt="Hero Background"
          />
          {/* Overlay chuyển màu từ trắng sang trong suốt để lộ ảnh bên phải */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent md:via-white/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-8xl font-oswald font-black leading-[0.9] tracking-tighter uppercase italic text-gray-900">
              VỊ NGON <br />
              <span className="text-primary underline decoration-gray-200 underline-offset-8">
                BÙNG NỔ
              </span>{" "}
              <br />
              TRONG TỪNG SỢI MÌ
            </h1>
            <p className="mt-8 text-sm md:text-base font-bold text-gray-500 max-w-lg font-oswald uppercase tracking-[0.3em] leading-relaxed">
              Nguyên liệu tươi sạch — Chế biến thủ công — Giao hàng thần tốc
              trong 20 phút.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/menu"
                className="bg-primary hover:bg-gray-900 text-white px-10 py-4 rounded-full text-[11px] font-oswald font-black uppercase tracking-[0.2em] transition-all duration-300 shadow-lg shadow-primary/20"
              >
                Khám Phá Thực Đơn
              </Link>
              <Link
                to="/about"
                className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-10 py-4 rounded-full text-[11px] font-oswald font-black uppercase tracking-[0.2em] transition-all duration-300"
              >
                Về Chúng Tôi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR ITEMS - Nền trắng kem nhạt */}
      <section className="bg-[#fafafa] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-2">
              <span className="text-primary font-oswald font-bold uppercase tracking-widest text-[10px] bg-primary/10 px-3 py-1 rounded-full">
                Must Try
              </span>
              <h3 className="text-4xl md:text-5xl font-oswald font-black text-gray-900 uppercase tracking-tighter italic">
                MÓN ĂN <span className="text-primary">ĐƯỢC YÊU THÍCH</span>
              </h3>
            </div>
            <Link
              to="/menu"
              className="text-gray-400 font-oswald font-bold uppercase tracking-widest text-[10px] border-b border-gray-200 pb-1 hover:text-primary hover:border-primary transition-all"
            >
              Xem tất cả sản phẩm
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {popularProducts.map((p) => (
              <div
                key={p.id}
                className="group bg-white p-4 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY GRID - Giao diện khung lưới tối giản */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-oswald font-black text-gray-900 uppercase tracking-tighter italic">
              THỰC ĐƠN <span className="text-gray-300">ĐA DẠNG</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                name: "Mì Chua Cay",
                img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600",
              },
              {
                name: "Phở Đặc Biệt",
                img: "https://images.unsplash.com/photo-1582878826629-29b7ad1ccd20?w=600",
              },
              {
                name: "Cơm Văn Phòng",
                img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600",
              },
              {
                name: "Bánh Mì Giòn",
                img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600",
              },
            ].map((c) => (
              <Link
                key={c.name}
                to="/menu"
                className="relative group overflow-hidden h-80 rounded-3xl flex items-center justify-center"
              >
                <img
                  src={c.img}
                  className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  alt={c.name}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-primary/40 transition duration-500" />
                <span className="relative z-10 text-white font-oswald font-black text-xl uppercase tracking-widest italic drop-shadow-lg">
                  {c.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CHÍNH SÁCH / ĐẶC ĐIỂM - Nhẹ nhàng */}
      <section className="bg-[#f3f3f3] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                num: "01",
                title: "NGUYÊN LIỆU SẠCH",
                desc: "100% nguyên liệu tự nhiên, nhập mới mỗi ngày.",
              },
              {
                num: "02",
                title: "GIAO HÀNG TẬN NƠI",
                desc: "Đảm bảo món ăn luôn nóng hổi khi đến tay bạn.",
              },
              {
                num: "03",
                title: "HƯƠNG VỊ GIA TRUYỀN",
                desc: "Công thức nước dùng độc quyền hơn 10 năm.",
              },
            ].map((item) => (
              <div key={item.num} className="text-center space-y-4">
                <span className="text-5xl font-oswald font-black text-gray-200 block leading-none">
                  {item.num}
                </span>
                <h3 className="text-lg font-oswald font-black text-gray-800 uppercase tracking-widest">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed uppercase tracking-wider">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
