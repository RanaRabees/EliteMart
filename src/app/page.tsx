import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import All_Products from "./components/All_Products";
import CustomerReview from "./components/CustomerReview";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";

export default function ProductsPage() {

  return (
    <>
      <Navbar />
      <Hero />
      <Header />
      <About />
      <All_Products />
      <CustomerReview />
      <Contact />
      <SocialLinks />
      <Footer />
    </>
  );
}
