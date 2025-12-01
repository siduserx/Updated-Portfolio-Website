import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience.jsx";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
// import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import NavBar from "./components/NavBar.jsx";

const App = () => (
  <>
    <NavBar />
    <Hero />
    <ShowcaseSection />
    {/* <LogoShowcase /> */}
    <FeatureCards />
    <Experience />
    <TechStack />
    <Contact />
    <Footer />
  </>
);

export default App;