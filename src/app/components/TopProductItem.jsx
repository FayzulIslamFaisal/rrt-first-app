import Image from "next/image";
import { addToCart } from "@/app/redux/features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const TopProductItem = ({ category }) => {
  const dispatch = useDispatch();
  const selectedCartItem = useSelector((state) => state.cart.cartProducts);

  const handleAddToCart = (e, product) => {
    e.preventDefault();

    // Check if product already exists in the cart
    const existingProduct = selectedCartItem.find(
      (item) => item.id === product.id
    );

    // Update cart in Redux
    dispatch(addToCart(product));

    // Synchronize localStorage
    const cartProducts =
      JSON.parse(localStorage.getItem("cart-products")) || [];
    if (existingProduct) {
      const updatedCart = cartProducts.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: item.totalPrice + product.price,
            }
          : item
      );
      localStorage.setItem("cart-products", JSON.stringify(updatedCart));
    } else {
      const newProduct = { ...product, quantity: 1, totalPrice: product.price };
      localStorage.setItem(
        "cart-products",
        JSON.stringify([...cartProducts, newProduct])
      );
    }

    // Display success notification
    toast.success(
      existingProduct
        ? "Product quantity updated in cart"
        : "Product added to cart"
    );
  };

  return (
    <div className=" bg-slate-500 relative h-full ">
      <div className="">
        <Image
          src={category?.imageUrl}
          width={500}
          height={220}
          alt={category?.name}
          className=" max-w-full "
        />
      </div>
      <div className=" p-4 text-white">
        <h3> {category?.name}</h3>
        <p>{category?.description}</p>
        <strong>Item:{category?.productsCount}</strong>
        <p className="pb-4">
          <strong>Price: $ {category?.price}</strong>
        </p>
        <button
          onClick={(e) => handleAddToCart(e, category)}
          className=" bg-green-400 text-black px-2 py-1 hover:bg-green-500"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default TopProductItem;
