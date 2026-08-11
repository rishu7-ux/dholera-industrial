import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProperties from "@/components/FeaturedProperties";
import PropertyIntro from "@/components/   PropertyIntro";
import RecentProperties from "@/components/RecentProperties";
import WhyInvest from "@/components/WhyInvest";
import PopularPlaces from "@/components/PopularPlaces";
import LookingFor from "@/components/LookingFor";
import PropertyType from "@/components/PropertyType";
import Testimonial from "@/components/Testimonial";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import PopupForm from "@/components/PopupForm"; 
import WelcomePopup from "@/components/WelcomePopup";// Import Popup
import CursorEffect from "@/components/CursorEffect";



export default function Home() {
  return (
    <>

      <TopBar />
      <Header />
      <Hero />
       <WelcomePopup />
       <PopupForm/>
       <PropertyIntro />
       <CursorEffect />
       <FeaturedProperties />
       <RecentProperties />
       <WhyInvest />
       <PopularPlaces />
       <LookingFor />
       <PropertyType />
       <Testimonial />
       <BlogSection />
       <CTASection />
       < Footer />
      
      

    </>
  );
}