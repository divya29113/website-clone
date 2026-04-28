import HeroSection from "../components/home/HeroSection";
import HeritageSection from "../components/home/HeritageSection";
import WhoWeAreSection from "../components/home/WhoWeAreSection";
import ServiceSection from "../components/home/ServiceSection";
import ScrollText from "../components/home/ScrollText";
import WorkGallery from "../components/home/WorkGallery";

function Home() {
  return (
    <>
      <HeroSection />
      <HeritageSection />
      <WhoWeAreSection />
      <ServiceSection />
      <ScrollText />
      <WorkGallery />
    </>
  );
}

export default Home;