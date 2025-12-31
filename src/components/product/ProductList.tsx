import { popularProducts } from "../../services/home.api";
import ProductCard from "./ProductCard";

// Khai báo Interface cho ProductList
interface ProductListProps {
  category: string;
}

export default function ProductList({ category }: ProductListProps) {
  const filtered =
    category === "Tất cả"
      ? popularProducts
      : popularProducts.filter((p) => p.category === category);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
      {filtered.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
