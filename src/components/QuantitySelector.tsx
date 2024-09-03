import { FaMinus, FaPlus } from "react-icons/fa";
import { useCart } from "../context/CartConext";

interface QuantitySelectorProps {
  product: Product;
}

export default function QuantitySelector({ product }: QuantitySelectorProps) {
  const { cart, addToCart, updateCartItemQuantity } = useCart();
  return (
    <fieldset
      className="flex items-center justify-between gap-4 bg-gray-100 rounded-md px-4 py-2 w-full md:w-32 border-none"
      aria-label="Quantity Selector"
    >
      <button
        className="text-orange-500"
        aria-label="Decrease quantity"
        onClick={() => {
          if (cart.length <= 0) {
            return;
          }
          updateCartItemQuantity(cart[0].product.id, -1);
        }}
      >
        <FaMinus />
      </button>
      <p className="text-lg font-bold" aria-live="polite" aria-atomic="true">
        {cart.length === 0 ? 0 : cart[0].quantity}
      </p>
      <button
        className="text-orange-500"
        aria-label="Increase quantity"
        onClick={() => {
          if (cart.length === 0) {
            addToCart(product);
          } else {
            updateCartItemQuantity(cart[0].product.id, 1);
          }
        }}
      >
        <FaPlus />
      </button>
    </fieldset>
  );
}
