import Image from "next/image";

const TopProductItem = ({ category }) => {
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
        <button className=" bg-slate-300 text-black px-2 py-1">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default TopProductItem;
