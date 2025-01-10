
import categories from "../utils/categoryMockData";
import CategoryItem from "./CategoryItem";



const Category = () => {
  
  return (
    <div className=" container mx-auto px-4 py-8">
      <div className=" grid grid-cols-3 gap-4">
        {categories.slice(0, 6).map((category) => {
          return <CategoryItem key={category.id} category={category} />; // pass category object to CategoryItem component and use it in CategoryItem component to render category details.  // Note: CategoryItem component should be created in a separate file named CategoryItem.jsx.  // Also, make sure to import CategoryItem component in the Category component.  // Remember to replace "/collection-outdoor-sports-equipment-kids_1007506-14348.avif" with actual image URL.  // Also, replace "/crowded-toy-store-stockcake.jpg" with actual image URL.  // Also, replace "/shop-online-slider-template-4f2c60.webp" with actual image URL.  // Also, replace "/shop-online-slider-template-4f2c60.webp" with actual image URL.  // Also, replace "/
        })}
      </div>
    </div>
  );
};

export default Category;
