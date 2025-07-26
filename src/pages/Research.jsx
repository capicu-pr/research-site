import { Link } from "react-router-dom";
import { FaRocket, FaUniversity, FaFileAlt } from "react-icons/fa";
import ResearchNavigation from "../components/ResearchNavigation";
import "../styles/Research.css";
import pcbBackground from "../assets/pcb-background.jpg";

export default function Research() {

  return (
    <div className="research">
      <ResearchNavigation />
      
      {/* Hero Section with PCB Background */}
      <section 
        className="hero"
        style={{ 
          backgroundImage: `url(${pcbBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="hero-content">
        <h1>Making the Invisible Understandable</h1>
          <p className="hero-text">
          {/* We design intelligent systems that operate at the smallest scale-responding closest to where biology speaks. */}
          From photoplethysmograms to spectral biomarkers, we extract meaning from complexity by bringing on-device machine learning to wearables, sensors, and biomedical platforms.
          </p>
        </div>
      </section>
    </div>
  );
} 