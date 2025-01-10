import Image from "next/image";

const CategoryItem = ({ category }) => {
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
      </div>
    </div>
  );
};

export default CategoryItem;
