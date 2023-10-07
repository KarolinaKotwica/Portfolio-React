import Navbar from "./components/Navbar";
import HomeSection from './components/HomeSection';
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import PortfolioSection from "./components/PortfolioSection";
import CertificatesSection from "./components/CertificatesSection";
import Contact from "./components/ContactSection";

function App() {
  return (
    <div className="App">
        <Navbar />
        <main>
          <HomeSection />
          <AboutSection />
          <SkillsSection />
          <PortfolioSection />
          <CertificatesSection />
          <Contact />
        </main>
    </div>
  );
}

export default App;