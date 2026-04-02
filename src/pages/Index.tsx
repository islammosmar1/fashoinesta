import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import FeaturedSection from "@/components/FeaturedSection";
import RentalHighlight from "@/components/RentalHighlight";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16 md:pt-20">
        <HeroSlider />
        <FeaturedSection />
        <RentalHighlight />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
