import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Stats from "../components/Stats/Stats";
import Features from "../components/Features/Features";
import DashboardPreview from "../components/DashboardPreview/DashboardPreview";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <DashboardPreview />
      <Footer />
    </>
  );
}

export default Home;