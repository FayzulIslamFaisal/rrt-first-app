"use client";
import { useDispatch, useSelector } from "react-redux";

import { setProduct } from "../redux/features/product/productSlice";
import { useEffect } from "react";
import TopProductItem from "./TopProductItem";
import categories from "../utils/categoryMockData";

const TopProducts = () => {
  const dispatch = useDispatch();
  const productItem = useSelector((state) => state.product);

  // Fetch product data when component mounts
  useEffect(() => {
    dispatch(setProduct(categories));
  }, [dispatch]);

  return (
    <div className=" container mx-auto px-4 py-8">
      <h1 className=" text-center mb-7 font-bold text-4xl ">Top Product</h1>
      <div className=" grid grid-cols-4 gap-4">
        {productItem.products.slice(2, 8).map((category) => {
          return <TopProductItem key={category.id} category={category} />;
        })}
      </div>
    </div>
  );
};

export default TopProducts;
