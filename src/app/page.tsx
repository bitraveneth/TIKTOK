import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureStrip from "@/components/FeatureStrip";
import ProductGrid from "@/components/ProductGrid";
import FlavorShowcase from "@/components/FlavorShowcase";
import About from "@/components/About";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeatureStrip />
      <ProductGrid />
      <FlavorShowcase />
      <About />
      <Newsletter />
      <Footer />
    </main>
  );
}
