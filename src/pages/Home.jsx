import HeroBanner from "../components/home/HeroBanner";
import CategoryGrid from "../components/home/CategoryGrid";
import FeaturedProducts from "../components/home/FeaturedProducts";
import RecentlyViewed from "../components/product/RecentlyViewed";


function Home() {
   
  return(
    <div>
     <HeroBanner />
      <CategoryGrid />
      <FeaturedProducts />
      <RecentlyViewed /> 
    </div>
  ) ;}

export default Home;
