import { Link } from "react-router-dom";

export default function About(): JSX.Element {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* HEADER SECTION - Tiêu đề trang */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://picsum.photos/1920/600?cooking"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          alt="About Us Background"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-oswald font-black uppercase tracking-tighter italic">
            CÂU CHUYỆN <span className="text-primary">CHÚNG TÔI</span>
          </h1>
          <div className="h-1 w-24 bg-primary mx-auto mt-4"></div>
        </div>
      </section>

      {/* STORY SECTION - Giới thiệu chi tiết */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-primary font-oswald font-bold uppercase tracking-widest text-sm mb-2">
              Since 2015
            </h2>
            <h3 className="text-4xl font-oswald font-black uppercase tracking-tighter mb-6 leading-none">
              HƠN CẢ MỘT <br /> BÁT MÌ CHUA CAY
            </h3>
            <div className="space-y-4 text-gray-400 font-sans leading-relaxed">
              <p>
                Bắt đầu từ một căn bếp nhỏ với niềm đam mê mãnh liệt dành cho ẩm
                thực đường phố Việt Nam,
                <span className="text-white font-bold"> MÌ CHUA CAY</span> đã ra
                đời với sứ mệnh mang đến những trải nghiệm vị giác bùng nổ và
                khó quên.
              </p>
              <p>
                Chúng tôi tin rằng ẩm thực không chỉ là ăn để no, mà là sự kết
                hợp tinh tế giữa ngũ vị: Chua của chanh tươi, Cay của ớt hiểm,
                Mặn của nước mắm cốt, Ngọt của xương hầm và Đắng nhẹ của rau
                thơm.
              </p>
              <p>
                Mỗi bát mì được phục vụ tại cửa hàng là kết quả của hàng giờ
                ninh xương và sự lựa chọn tỉ mỉ từng sợi mì dai ngon nhất.
              </p>
            </div>
            <Link
              to="/menu"
              className="inline-block mt-8 border-2 border-primary text-primary px-8 py-3 rounded-full font-oswald font-black uppercase tracking-widest hover:bg-primary hover:text-white transition duration-300"
            >
              Xem Thực Đơn
            </Link>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary z-0"></div>
            <img
              src="https://picsum.photos/800/1000?chef"
              className="relative z-10 w-full h-[500px] object-cover shadow-2xl"
              alt="Our Chef"
            />
          </div>
        </div>
      </section>

      {/* CORE VALUES - Giá trị cốt lõi */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-black font-oswald font-black text-4xl md:text-5xl uppercase tracking-tighter">
              TẠI SAO CHỌN MÌ CHUA CAY?
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Nguyên Liệu Sạch",
                desc: "100% nguyên liệu được nhập từ các nông trại địa phương, đảm bảo độ tươi ngon mỗi ngày.",
                icon: "🌿",
              },
              {
                title: "Công Thức Độc Quyền",
                desc: "Nước dùng được hầm từ xương ống trong 12 giờ cùng thảo mộc quý hiếm.",
                icon: "🔥",
              },
              {
                title: "Phục Vụ Tận Tâm",
                desc: "Chúng tôi coi khách hàng như người thân, phục vụ bằng sự chân thành và niềm vui.",
                icon: "❤️",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-10 text-center hover:shadow-xl transition group"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition duration-300">
                  {item.icon}
                </div>
                <h4 className="text-black font-oswald font-black text-xl uppercase tracking-widest mb-4 italic">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER GỌI MÓN - Kêu gọi hành động */}
      <section className="py-24 relative overflow-hidden flex items-center justify-center text-center">
        <img
          src="https://picsum.photos/1920/800?kitchen"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          alt="CTA Background"
        />
        <div className="relative z-10 px-6">
          <h2 className="text-4xl md:text-6xl font-oswald font-black uppercase tracking-tighter mb-8">
            BẠN ĐÃ SẴN SÀNG THỬ <br />{" "}
            <span className="text-primary italic">VỊ CAY BÙNG NỔ?</span>
          </h2>
          <Link
            to="/menu"
            className="bg-primary text-white px-12 py-5 rounded-full text-lg font-oswald font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 shadow-2xl"
          >
            ĐẶT HÀNG NGAY BÂY GIỜ
          </Link>
        </div>
      </section>
    </div>
  );
}
