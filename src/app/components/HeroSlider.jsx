import Image from "next/image";
import categories from "../utils/categoryMockData";

const HeroSlider = () => {
  return (
    <div className="flex gap-4 py-3">
      <div className="w-1/4 bg-slate-400 px-4">
        <ul className="">
          {categories?.map((category) => {
            return (
              <li
                key={category.id}
                className=" bg-slate-600 py-1 mb-1 text-white px-2"
              >
                <span> {category.name} </span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className=" w-3/4">
        <div className="">
          <Image
            src="/shop-online-slider-template-4f2c60.webp"
            alt="image"
            width={1100}
            height={400}
            className=" max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
