import { useCartStore } from "../../store/cartStore";
import type { Product } from "../../types/product";
import { HiOutlinePlusSmall } from "react-icons/hi2"; // Thêm icon cho nút thêm món

export default function ProductCard({ product }: { product: Product }) {
  const add = useCartStore((s) => s.add);

  return (
    <div className="group bg-white rounded-3xl shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 overflow-hidden border border-gray-100">
      {/* Khung ảnh với hiệu ứng zoom nhẹ khi hover */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Nhãn Category nhỏ */}
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-[9px] font-oswald font-bold px-2 py-1 rounded-full text-gray-800 uppercase tracking-widest">
          {product.category}
        </span>
      </div>

      <div className="p-5">
        {/* Tên sản phẩm: Chuyển sang font Oswald cho đồng bộ, chữ xám đậm */}
        <h3 className="font-oswald font-bold text-gray-900 text-lg uppercase leading-tight h-12 line-clamp-2 italic tracking-tight">
          {product.name}
        </h3>

        <div className="flex items-center justify-between mt-5">
          {/* Giá tiền: Định dạng chuẩn Việt Nam */}
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">
              Giá bán
            </span>
            <span className="text-primary font-oswald font-black text-xl leading-none">
              {product.price.toLocaleString("vi-VN")}
              <span className="text-xs ml-0.5 underline decoration-2 underline-offset-2">
                đ
              </span>
            </span>
          </div>

          {/* Nút thêm món: Thiết kế tối giản, tinh tế */}
          <button
            onClick={() => add(product)}
            className="bg-gray-900 text-white p-2.5 rounded-xl hover:bg-primary transition-colors duration-300 shadow-lg shadow-gray-200 active:scale-90"
            title="Thêm vào giỏ hàng"
          >
            <HiOutlinePlusSmall className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
