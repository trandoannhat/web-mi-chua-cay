import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function Contact(): JSX.Element {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* HEADER SECTION */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Liên hệ"
        />
        <div className="relative z-20 text-center">
          <h1 className="text-5xl md:text-7xl font-oswald font-black uppercase tracking-tighter italic">
            LIÊN HỆ <span className="text-primary">CHÚNG TÔI</span>
          </h1>
          <p className="text-gray-300 font-oswald uppercase tracking-[0.3em] mt-4 text-sm font-bold">
            Chúng tôi luôn sẵn sàng lắng nghe bạn
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* CỘT TRÁI: THÔNG TIN LIÊN HỆ */}
          <div>
            <h2 className="text-4xl font-oswald font-black uppercase tracking-tighter mb-8 italic">
              THÔNG TIN <span className="text-primary">CỬA HÀNG</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-8">
              {/* Địa chỉ */}
              <div className="flex flex-col gap-3 p-6 bg-white/5 border border-white/10 hover:border-primary transition duration-300">
                <FaMapMarkerAlt className="text-primary text-2xl" />
                <h4 className="font-oswald font-bold uppercase tracking-widest text-lg">
                  Địa Chỉ
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  123 Đường Ẩm Thực, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh
                </p>
              </div>

              {/* Điện thoại */}
              <div className="flex flex-col gap-3 p-6 bg-white/5 border border-white/10 hover:border-primary transition duration-300">
                <FaPhoneAlt className="text-primary text-2xl" />
                <h4 className="font-oswald font-bold uppercase tracking-widest text-lg">
                  Hotline
                </h4>
                <a
                  href="tel:0123456789"
                  className="text-gray-400 text-sm hover:text-white transition"
                >
                  0123 456 789
                </a>
                <a
                  href="tel:0987654321"
                  className="text-gray-400 text-sm hover:text-white transition"
                >
                  0987 654 321
                </a>
              </div>

              {/* Giờ làm việc */}
              <div className="flex flex-col gap-3 p-6 bg-white/5 border border-white/10 hover:border-primary transition duration-300">
                <FaClock className="text-primary text-2xl" />
                <h4 className="font-oswald font-bold uppercase tracking-widest text-lg">
                  Giờ Mở Cửa
                </h4>
                <p className="text-gray-400 text-sm">
                  Thứ 2 - Thứ 6: 10AM - 9PM
                </p>
                <p className="text-gray-400 text-sm font-bold text-white">
                  Thứ 7 - CN: 9AM - 10PM
                </p>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-3 p-6 bg-white/5 border border-white/10 hover:border-primary transition duration-300">
                <FaEnvelope className="text-primary text-2xl" />
                <h4 className="font-oswald font-bold uppercase tracking-widest text-lg">
                  Email
                </h4>
                <a
                  href="mailto:hello@michuacay.com"
                  className="text-gray-400 text-sm hover:text-white transition"
                >
                  hello@michuacay.com
                </a>
              </div>
            </div>
          </div>

          {/* CỘT PHẢI: FORM GỬI TIN NHẮN */}
          <div className="bg-white p-8 md:p-12 shadow-2xl">
            <h3 className="text-black font-oswald font-black text-3xl uppercase tracking-tighter mb-8">
              GỬI LỜI NHẮN CHO{" "}
              <span className="text-primary italic">MÌ CHUA CAY</span>
            </h3>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="HỌ VÀ TÊN"
                  className="w-full bg-gray-100 border-none p-4 text-black text-xs font-bold font-oswald tracking-widest focus:ring-2 focus:ring-primary outline-none"
                />
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="w-full bg-gray-100 border-none p-4 text-black text-xs font-bold font-oswald tracking-widest focus:ring-2 focus:ring-primary outline-none"
                />
              </div>
              <input
                type="text"
                placeholder="SỐ ĐIỆN THOẠI"
                className="w-full bg-gray-100 border-none p-4 text-black text-xs font-bold font-oswald tracking-widest focus:ring-2 focus:ring-primary outline-none"
              />
              <textarea
                rows={4}
                placeholder="NỘI DUNG TIN NHẮN"
                className="w-full bg-gray-100 border-none p-4 text-black text-xs font-bold font-oswald tracking-widest focus:ring-2 focus:ring-primary outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-primary text-white py-4 font-oswald font-black uppercase tracking-[0.3em] hover:bg-black transition-all duration-300 shadow-lg shadow-primary/20"
              >
                Gửi Tin Nhắn Ngay
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* MAP SECTION - Bản đồ lớn */}
      <section className="h-[500px] w-full grayscale contrast-125 hover:grayscale-0 transition-all duration-1000">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.460232428323!2d106.6991629!3d10.7756587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4730628e7d%3A0x21035d3a4f108c4!2zQsOqbiBOZ2jDqSwgUXXhuq1uIDEsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1710000000000!5m2!1svi!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}
