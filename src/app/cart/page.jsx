"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  incrementQuantity,
  removeCartItem,
  decrementQuantity,
} from "../redux/features/cart/cartSlice";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const cartItemFromStore = useSelector((state) => state.cart.cartProducts); // Data from Redux store
  const [cartItem, setCartItem] = useState([]);
  const [address, setAddress] = useState("Kallyanpur, Dhaka , Bangladesh");
  const [changeAddress, setChangeAddress] = useState("");
  const dispatch = useDispatch();

  const router = useRouter();

  const handleInputChange = (e) => {
    setChangeAddress(e.target.value);
  };

  const handleChangeAddress = () => {
    if (changeAddress.trim()) {
      setAddress(changeAddress.trim());
      setChangeAddress(""); // Clear the input
    }
  };

  // Retrieve cart data conditionally from Redux or localStorage
  useEffect(() => {
    if (cartItemFromStore.length > 0) {
      setCartItem(cartItemFromStore);
    } else {
      const localStorageCart = localStorage.getItem("cart-products");
      if (localStorageCart) {
        setCartItem(JSON.parse(localStorageCart));
      }
    }
  }, [cartItemFromStore]);

  const totalItem = cartItem.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const totalPrice = cartItem.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const handleRemoveCartItem = (productId) => {
    if (productId) {
      // Remove item from Redux store
      dispatch(removeCartItem(productId));

      // Remove item from localStorage
      const localStorageCart = localStorage.getItem("cart-products");
      if (localStorageCart) {
        const cartItems = JSON.parse(localStorageCart);
        const updatedCart = cartItems.filter((item) => item.id !== productId);
        localStorage.setItem("cart-products", JSON.stringify(updatedCart));
        setCartItem(updatedCart);
      }

      toast.success("Item removed from cart successfully!");
    } else {
      toast.error("Failed to remove item. Please try again.");
    }
  };

  const handleIncrement = (productId) => {
    if (productId) {
      dispatch(incrementQuantity(productId));
      const localStorageCart = localStorage.getItem("cart-products");
      if (localStorageCart) {
        const cartItems = JSON.parse(localStorageCart);
        const updatedCart = cartItems.map((item) => {
          if (item.id === productId) {
            item.quantity += 1;
            item.totalPrice = item.price * item.quantity;
          }
          return item;
        });

        localStorage.setItem("cart-products", JSON.stringify(updatedCart));
        setCartItem(updatedCart);
      }

      toast.success("Quantity incremented successfully!");
    } else {
      toast.error("Failed to increment quantity. Please try again.");
    }
  };

  const handleDecrement = (productId) => {
    if (productId) {
      // Decrement quantity in Redux store
      dispatch(decrementQuantity(productId));

      // Decrement quantity in localStorage
      const localStorageCart = localStorage.getItem("cart-products");
      if (localStorageCart) {
        const cartItems = JSON.parse(localStorageCart);
        const updatedCart = cartItems
          .map((item) => {
            if (item.id === productId) {
              if (item.quantity > 1) {
                item.quantity -= 1; // Decrease quantity by 1
                item.totalPrice = item.price * item.quantity; // Update total price
              }
            }
            return item;
          })
          .filter((item) => item.quantity > 0); // Remove items with quantity <= 0

        localStorage.setItem("cart-products", JSON.stringify(updatedCart));
        setCartItem(updatedCart); // Update state for immediate UI update
      }

      toast.success("Quantity decremented successfully!");
    } else {
      toast.error("Failed to decrement quantity. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex  gap-4">
        <div className="w-3/4">
          {cartItem.length > 0 && (
            <table className="w-full">
              <thead>
                <tr className="bg-gray-200 py-1">
                  <th>SL</th>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItem.map((item, index) => {
                  return (
                    <tr key={item.id} className="border-b-2 border-gray-200">
                      <td className="text-center py-2">{index + 1}</td>
                      <td className="text-center py-2 mr-auto">
                        <Image
                          width={100}
                          height={60}
                          src={item.imageUrl}
                          alt={item.id}
                          className="inline-block"
                        />
                      </td>
                      <td className="text-center py-2">
                        <h3>{item.name}</h3>
                      </td>
                      <td>
                        <div className=" flex items-center gap-2 justify-center">
                          <button
                            onClick={() => handleDecrement(item.id)}
                            className={`bg-red-500 text-white px-2 py-1 ${
                              item.quantity === 1
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                            }`}
                            disabled={item.quantity === 1}
                          >
                            -
                          </button>
                          <span> {item.quantity}</span>
                          {/* <input type="number" value="1" /> */}
                          <button
                            onClick={() => handleIncrement(item.id)}
                            className="bg-green-500 text-white px-2 py-1"
                          >
                            +
                          </button>
                        </div>
                      </td>

                      <td className="text-center py-2">{item.price}</td>
                      <td className="text-center py-2">
                        <button
                          title="Remove"
                          onClick={() => handleRemoveCartItem(item.id)}
                        >
                          <RiDeleteBinLine className=" text-red-600" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
          {cartItem.length === 0 && (
            <div
              className="flex justify-center  items-center"
              style={{ height: "calc(100vh - 200px)" }}
            >
              <h1 className="text-center text-4xl"> Cart Is Empty</h1>
            </div>
          )}
        </div>
        <div className="w-1/4">
          <div className="text-center font-bold mb-4 capitalize text-2xl ">
            Cart Summary
          </div>
          <div className=" pb-4">
            <h1 className="capitalize font-medium flex justify-between pb-2 border-b-2 border-gray-200 mb-2">
              <span>Total Items </span>
              <span>({totalItem})</span>
            </h1>
            <div className="border-b-2 border-gray-200 pb-2">
              <p className=" ">
                {" "}
                <strong>Shipping</strong>: {address}
              </p>

              <div className=" py-3">
                <input
                  value={changeAddress}
                  type="text"
                  className=" w-full px-4 py-1 border border-slate-400 rounded-md outline-none"
                  onChange={handleInputChange}
                  placeholder="Enter Your Addres...."
                />
              </div>

              <button
                className=" bg-black text-white px-4 py-1"
                onClick={handleChangeAddress}
              >
                Change Address
              </button>
            </div>
            <div className=" pt-4">
              <strong className="mb-4 flex justify-between items-center">
                <span>Total Price</span>
                <span>$ {totalPrice.toFixed(2)}</span>
              </strong>
              <button
                onClick={() => router.push("/checkout")}
                className=" w-full px-4 py-2 bg-red-500 text-white"
              >
                Procced To Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
