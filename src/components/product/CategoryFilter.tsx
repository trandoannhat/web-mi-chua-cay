import { type Dispatch, type SetStateAction } from "react";

// Bước 1: Định nghĩa các dữ liệu mà Component này sẽ nhận
interface CategoryFilterProps {
  activeCategory: string;
  setActiveCategory: Dispatch<SetStateAction<string>>;
}

// Bước 2: Đưa interface vào tham số của hàm
export default function CategoryFilter({
  activeCategory,
  setActiveCategory,
}: CategoryFilterProps) {
  const categories = [
    "Tất cả",
    "Mì Chua Cay",
    "Phở",
    "Bánh Mì",
    "Khai Vị",
    "Đồ Uống",
  ];

  return (
    <nav className="flex flex-col gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={`w-full text-left py-4 px-6 rounded-2xl font-oswald text-sm uppercase tracking-widest transition-all duration-300 ${
            activeCategory === cat
              ? "bg-primary text-white shadow-lg shadow-primary/20 translate-x-2"
              : "bg-white text-gray-500 border border-gray-100 hover:border-primary hover:text-primary"
          }`}
        >
          {cat}
        </button>
      ))}
    </nav>
  );
}
