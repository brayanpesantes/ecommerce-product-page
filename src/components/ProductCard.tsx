import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartConext";
import Button from "./Button";
import ProductGallery from "./ProductGallery";
import QuantitySelector from "./QuantitySelector";

interface ProductCardProps {
  products: Product[];
}

export default function ProductCard({ products }: Readonly<ProductCardProps>) {
  const { addToCart } = useCart();
  return (
    <article
      className="flex flex-col md:flex-row lg:gap-28 gap-12 md:px-12"
      aria-labelledby={`product-${products[0].id}-title`}
    >
      <div className="flex flex-col md:flex-row gap-4">
        <ProductGallery images={products[0].images} />
      </div>
      <div className="flex flex-col self-center gap-7 px-6 md:px-0">
        <div className="flex flex-col gap-4">
          <h1
            className="text-sm text-gray-500 uppercase"
            id={`product-${products[0].id}-company`}
            aria-label={`Company: ${products[0].company}`}
          >
            {products[0].company}
          </h1>
          <h2
            className="text-3xl font-bold"
            id={`product-${products[0].id}-title`}
            aria-label={`Product Name: ${products[0].name}`}
          >
            {products[0].name}
          </h2>
          <p
            className="text-sm text-gray-500"
            id={`product-${products[0].id}-description`}
            aria-label={`Description: ${products[0].description}`}
          >
            {products[0].description}
          </p>
          <div>
            <p
              className="text-3xl font-bold"
              id={`product-${products[0].id}-price`}
            >
              $
              {(products[0].price * (1 - products[0].discount / 100)).toFixed(
                2
              )}
              <span className="text-sm ml-4 text-gray-100 bg-gray-900 px-2 py-1 rounded-md">
                {products[0].discount}%
              </span>
            </p>
            <p
              className="text-lg font-bold line-through text-gray-400"
              id={`product-${products[0].id}-original-price`}
            >
              ${products[0].price.toFixed(2)}
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-3">
          <QuantitySelector product={products[0]} />
          <Button
            className="bg-orange-500 items-center text-gray-900 px-4 py-2 rounded-md"
            aria-label="Add to cart"
            onClick={() => addToCart(products[0])}
          >
            <FaShoppingCart className="mr-2" />
            Add to cart
          </Button>
        </div>
      </div>
    </article>
  );
}
