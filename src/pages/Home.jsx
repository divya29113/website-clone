import HeroSection from "../components/home/HeroSection";
import HeritageSection from "../components/home/HeritageSection";
import WhoWeAreSection from "../components/home/WhoWeAreSection";
import ServiceSection from "../components/home/ServiceSection";
import ScrollText from "../components/home/ScrollText";
import WorkGallery from "../components/home/WorkGallery";
import Highlights from "../components/home/Highlights";
import WhyChoose from "../components/home/WhyChoose";
import ProcessSection from "../components/home/ProcessSection";
import Testimonials from "../components/home/Testimonials";
import BlogSection from "../components/home/BlogSection";

function Home() {
  return (
    <>
      <HeroSection />
      <HeritageSection />
      <WhoWeAreSection />
      <ServiceSection />
      <ScrollText />
      <WorkGallery />
      <Highlights />
      <WhyChoose />
      <ProcessSection />
      <Testimonials />
      <BlogSection />

    </>
  );
}

export default Home;