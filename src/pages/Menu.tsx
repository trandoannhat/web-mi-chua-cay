import { useState } from "react";
import CategoryFilter from "../components/product/CategoryFilter";
import ProductList from "../components/product/ProductList";

export default function Menu() {
  // 1. Tạo State để lưu danh mục đang chọn
  const [activeCategory, setActiveCategory] = useState("Tất cả");

  return (
    <div className="min-h-screen bg-[#fafafa] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* HIỆN TÊN DANH MỤC ĐANG CHỌN */}
        <div className="mb-16 border-b border-gray-100 pb-10">
          <h1 className="text-5xl md:text-8xl font-oswald font-black text-gray-900 uppercase tracking-tighter italic leading-none">
            {activeCategory === "Tất cả" ? "THỰC ĐƠN" : activeCategory}
          </h1>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.4em] mt-4 flex items-center gap-3">
            <span className="w-12 h-[1px] bg-primary"></span>
            {activeCategory === "Tất cả"
              ? "Tất cả món ăn của chúng tôi"
              : `Danh mục ${activeCategory}`}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          <aside className="lg:w-1/4">
            {/* 2. Truyền State và Hàm thay đổi State vào Filter */}
            <CategoryFilter
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          </aside>

          <main className="lg:w-3/4">
            {/* 3. Truyền danh mục hiện tại vào List để lọc */}
            <ProductList category={activeCategory} />
          </main>
        </div>
      </div>
    </div>
  );
}
