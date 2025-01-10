import Category from "./components/Category";
import HeroSlider from "./components/HeroSlider";
import TopProducts from "./components/TopProducts";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Category />
      <TopProducts />
    </>
  );
}
