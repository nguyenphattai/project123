import ProductComparison from "./ProductComparison/ProductComparison";
import products from "./Products.json";

function Product() {
  return (
    <div>
      <ProductComparison products={products} />
    </div>
  );
}
export default Product;
