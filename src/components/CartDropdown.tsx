import { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import { useCart } from "../context/CartConext";
import Button from "./Button";

export default function CartDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, clearCart } = useCart();
  return (
    <>
      <div className="flex gap-11">
        <button
          className="text-gray-500 hover:text-gray-900 relative"
          aria-label="View cart"
        >
          <span className="absolute top-1 left-2 bg-orange-500 text-white text-xs rounded-full w-5 h-4 flex items-center justify-center">
            {cart.length === 0 ? 0 : cart[0].quantity}
          </span>
          <span className="sr-only">Cart</span>
          <BsCart3 size={24} />
        </button>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="cart-dropdown"
          aria-label="Toggle cart dropdown"
        >
          <img
            src="/images/image-avatar.png"
            alt="User avatar"
            className="size-12 rounded-full hover:border-2 transition-all duration-100 hover:border-orange-500"
          />
        </button>
      </div>
      <div
        id="cart-dropdown"
        className={`absolute  right-4 top-32 md:top-20 w-72  md:min-w-80 md:-right-12 bg-white shadow-lg rounded-lg z-50 ${
          isOpen ? "block" : "hidden"
        }`}
        role="region"
        aria-labelledby="cart-title"
      >
        <div
          className="flex items-center py-8 px-6 border-b border-gray-300"
          id="cart-title"
        >
          <p>Cart</p>
        </div>
        {cart.length > 0 ? (
          <>
            <div className="flex justify-between items-center p-6 gap-2">
              <img
                src="/images/image-product-1-thumbnail.jpg"
                alt="Fall Limited Edition Sneakers"
                className="size-[50px] rounded-md"
              />
              <div className="flex flex-col">
                <p className="text-gray-900 text-sm">{cart[0]?.product.name}</p>
                <p>
                  $
                  {(
                    cart[0].product.price *
                    (1 - cart[0].product.discount / 100)
                  ).toFixed(2)}{" "}
                  x {cart[0]?.quantity}
                  <span className="text-gray-900 ml-2 font-bold">
                    $
                    {(
                      cart[0].product.price *
                      (1 - cart[0].product.discount / 100) *
                      cart[0]?.quantity
                    ).toFixed(2)}
                  </span>
                </p>
              </div>
              <button
                aria-label="Remove item from cart"
                onClick={() => clearCart()}
              >
                <FaTrashAlt size={16} className="text-gray-500" />
              </button>
            </div>
            <div className="p-6">
              <Button
                className="w-full px-4 py-3 rounded-lg"
                aria-label="Proceed to checkout"
              >
                Checkout
              </Button>
            </div>
          </>
        ) : (
          <div className="min-h-[150px] flex items-center justify-center">
            <p className="text-gray-500 text-center">Your cart is empty</p>
          </div>
        )}
      </div>
    </>
  );
}
