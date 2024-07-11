import BrandSection from "../../../../Components/BrandSection/BrandSection";
import CustomCarousel from "../../../../Components/CustomCarousel/CustomCarousel";
import Deal from "../../../../Components/Deal/Deal";
import FeaturedProducts from "../../../../Components/FeaturedProducts/FeaturedProducts";
import GridLayout from "../../../../Components/GridLayout/GridLayout";
import SpecialOffer from "../../../../Components/SpecialOffer/SpecialOffer";

export default function Home() {
  return (
    <>
      <CustomCarousel />
      <GridLayout />
      <BrandSection />
      <FeaturedProducts />
      <Deal />
      {/* <SpecialOffer /> */}
    </>
  )
}