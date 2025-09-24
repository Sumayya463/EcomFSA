import React, { useState } from "react";
import { FaMinus, FaPlus, FaTrash, FaLock, FaTruck, FaUndo } from "react-icons/fa";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      category: "Electronics",
      details: "Model: WH-1000XM4",
      price: 129.99,
      quantity: 1,
       image: "/images/backpack.jpg"
    },
    {
      id: 2,
      name: "Premium Cotton T-Shirt",
      category: "Clothing",
      details: "Size: L, Color: Navy Blue",
      price: 24.99,
      quantity: 2,
       image: "/images/backpack.jpg",
    },
    {
      id: 3,
      name: "Smart Watch Series 5",
      category: "Electronics",
      details: "Color: Space Gray, 44mm",
      price: 249.99,
      quantity: 1,
       image: "/images/backpack.jpg",
    },
    {
      id: 4,
      name: "Travel Backpack",
      category: "Accessories",
      details: "Color: Black, 30L Capacity",
      price: 59.99,
      quantity: 1,
       image: "/images/backpack.jpg",
    },
  ]);

  // Update quantity
  const updateQuantity = (id, type) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: type === "increase" ? item.quantity + 1 : Math.max(item.quantity - 1, 1),
            }
          : item
      )
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Cart summary calculations
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 9.99;
  const tax = 49.0;
  const discount = 25.0;
  const total = subtotal + shipping + tax - discount;

  return (
    <div className=" min-h-screen p-6">
      <h1 className="text-3xl  text-grey-400 px-15 ">Your Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-10 px-15">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-0.5">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center p-4 bg-white shadow-sm rounded">
              <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                
                </div>

              {/* Item Info */}
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-500">{item.category}</p>
                <p className="text-sm text-gray-400">{item.details}</p>
              </div>
              
             

              {/* Quantity & Price */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => updateQuantity(item.id, "decrease")}
                  className="p-2 border rounded-full text-gray-600 hover:bg-gray-100"
                >
                  <FaMinus size={12} />
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, "increase")}
                  className="p-2 border rounded-full text-gray-600 hover:bg-gray-100"
                >
                  <FaPlus size={12} />
                </button>
              </div>

              {/* Price */}
              <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>

              {/* Remove */}
              <button
                onClick={() => removeItem(item.id)}
                className="text-gray-400 hover:text-red-500"
              >
                <FaTrash />
              </button>
            </div>
          ))}

          <a href="/" className="text-sm text-gray-600 py-5 flex items-center gap-1 hover:underline">
            ← Continue Shopping
          </a>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-sm ">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Subtotal ({cartItems.length} items)</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-red-500">
              <span>Discount</span>
              <span>- ${discount.toFixed(2)}</span>
            </div>
            <hr />
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <button className="w-full bg-black text-white py-3 rounded-lg mt-6 hover:bg-gray-800">
            Proceed to Checkout
          </button>

          <p className="text-center text-gray-500 my-3">or</p>

          <button className="w-full border py-3 rounded-lg hover:bg-gray-100">
            PayPal Express
          </button>

          {/* Promo Code */}
          <div className="mt-4">
            <p className="text-sm text-gray-600">Have a promo code?</p>
            <button className="text-sm text-blue-600 hover:underline">+ Add</button>
          </div>

          {/* Footer icons */}
          <div className="mt-6 space-y-2 text-gray-500 text-sm">
            <p className="flex items-center gap-2">
              <FaLock /> Secure checkout with SSL encryption
            </p>
            <p className="flex items-center gap-2">
              <FaTruck /> Free shipping on orders over $50
            </p>
            <p className="flex items-center gap-2">
              <FaUndo /> 30-day return policy
            </p>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Cart;
