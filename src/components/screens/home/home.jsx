import CountDownSection from "./sections/CountDown/CountDownSection";
import EventsSection from "./sections/Events/EventsSection";
import GallerySection from "./sections/Gallery/GallerySection";
import GlimpseSection from "./sections/Glimpse/GlimpseSection";
import HeroSection from "./sections/Hero/HeroSection";
import PreWeddingSection from "./sections/PreWedding/PreWeddingSections";
import WishesSection from "./sections/wishes/WishesSection";
import ScrollSection from "./sections/Scroll/ScrollSection";

const HomeScreen = () => {
  return (
    <div className="wedding-website">
      <HeroSection />
      <CountDownSection />
      <PreWeddingSection />
      <ScrollSection />
      <GlimpseSection />
      <EventsSection />
      <GallerySection />
      <WishesSection />
    </div>
  );
};

export default HomeScreen;
