import ResearchNavigation from "../components/ResearchNavigation";
import { FaChevronDown } from "react-icons/fa";
import { useEffect, useRef } from "react";
import "../styles/Research.css";
import pcbBackground from "../assets/pcb-background.jpg";
import mayaguezBackground from "../assets/mayaguez-background.jpg";
import sebastianHeadshot from "../assets/sebastiancruz_headshot.png";
import wilfredoHeadshot from "../assets/wilfredolugo_headshot.png";
import { FaLinkedin, FaGithub, FaEnvelope, FaOrcid, FaGoogle } from "react-icons/fa";

export default function Research() {
  const heroRef = useRef(null);
  const teamRef = useRef(null);

  useEffect(() => {
    const adjustHeroHeight = () => {
      if (heroRef.current) {
        const navbar = document.querySelector('.research-navigation');
        const navbarHeight = navbar ? navbar.offsetHeight : 80;
        const windowHeight = window.innerHeight;
        const heroHeight = windowHeight - navbarHeight;
        
        heroRef.current.style.height = `${heroHeight}px`;
      }
    };

    const adjustTeamHeight = () => {
      if (teamRef.current) {
        const navbar = document.querySelector('.research-navigation');
        const navbarHeight = navbar ? navbar.offsetHeight : 80;
        const windowHeight = window.innerHeight;
        const teamHeight = windowHeight - navbarHeight;
        
        teamRef.current.style.setProperty('height', `${teamHeight}px`, 'important');
      }
    };

    // Initial adjustment
    adjustHeroHeight();
    adjustTeamHeight();

    // Adjust on window resize
    window.addEventListener('resize', () => {
      adjustHeroHeight();
      adjustTeamHeight();
    });

    // Cleanup
    return () => {
      window.removeEventListener('resize', () => {
        adjustHeroHeight();
        adjustTeamHeight();
      });
    };
  }, []);

  const scrollToNextSection = (targetSection) => {
    const nextSection = document.querySelector(targetSection);
    if (nextSection) {
      const navbar = document.querySelector('.research-navigation');
      const navbarHeight = navbar ? navbar.offsetHeight : 80;
      const windowWidth = window.innerWidth;
      
      if (windowWidth > 900) {
        // Desktop - scroll to center
        nextSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'center'
        });
      } else {
        // Mobile/Tablet - scroll to start
        const elementTop = nextSection.offsetTop - navbarHeight;
        window.scrollTo({
          top: elementTop,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div className="research">
      <ResearchNavigation />
      
      {/* Hero Section with PCB Background */}
      <section 
        ref={heroRef}
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
            From pulse oximetry to molecular biomarkers, we extract meaning from complexity by bringing on-device machine learning to wearables, sensors, and biological platforms.
          </p>
        </div>
        
        {/* Downward Arrow */}
        <button 
          className="hero-arrow"
          onClick={() => scrollToNextSection('.next-section')}
          aria-label="Scroll to next section"
        >
          <FaChevronDown />
        </button>
      </section>

      {/* Active Research Section */}
      <section className="next-section">
        <div className="container">
          <div className="research-layout">
            {/* Who We Are Section */}
            <div className="who-we-are">
              <h2>From Lab Bench to Field Edge</h2>
              <div className="who-we-are-content">
                <p>
                  <span className="highlight">We bridge emerging biosensing technologies with Edge AI to power next-gen tools for biomedical, biotechnological, and biomolecular innovation. </span> 
                  We design, build, and commercialize systems that integrate real-time biosignal acquisition, on-device intelligence, and embedded analytics, enabling data-rich insights at the point of measurement — whether in a wearable, a lab bench, or the field.
                </p>
                <p>
                  With the convergence of embedded computing, open-access bioinstrumentation, and scalable edge analytics, the boundaries between the lab, clinic, and field are disappearing. From remote diagnostics and continuous health monitoring, to bioproduction process control, molecular characterization, and portable assay systems, we create infrastructure that transforms raw biosignals into actionable, deployable intelligence.
                </p>
              </div>
            </div>

            {/* Technology Images */}
            <div className="technology-images">
              <div className="image-card wearable-card">
                <img 
                  src="https://o.lnwfile.com/_/o/_raw/55/pc/32.jpg" 
                  alt="SpO2 sensor interfaced with Arduino for wearable biomedical devices"
                />
              </div>
              
              <div className="image-card molecular-card">
                <img 
                  src="https://healthcare-in-europe.com/media/story_section_text/17692/image-01-the-first-molecular-electronics-chip.jpg" 
                  alt="Molecular electronic sensing device for DNA sequencing and biosensing applications"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Section Arrow */}
        <button 
          className="section-arrow"
          onClick={() => scrollToNextSection('.nsf-section')}
          aria-label="Scroll to next section"
        >
          <FaChevronDown />
        </button>
      </section>

      {/* Fourth Section - NSF ACCESS Section */}
      <section className="nsf-section">
        <div className="container">
          <div className="research-layout">
            {/* Who We Are Section */}
            <div className="who-we-are">
              <h2>National Infrastructure, Cutting-Edge Innovation</h2>
              <div className="who-we-are-content">
                <p>
                  Capicú Technologies holds an active NSF ACCESS allocation supporting over 400,000 compute units across national HPC systems. These resources power our R&D in model compression, edge deployment, and biomedical informatics, enabling scalable AI for biomedical and biomolecular sensing platforms. </p>
                  <p className="highlight">We're using this infrastructure to build optimized, real-time ML pipelines for embedded inference — from waveform analysis to molecular data processing.</p> 
                <div className="nsf-divider"></div>
                <p className="nsf-details">
                  <strong>Principal Investigator (PI):</strong> <a href="https://orcid.org/0000-0003-3892-2273" target="_blank" rel="noopener noreferrer">Sebastián A. Cruz Romero</a>
                  <br />
                  <strong>Project Title:</strong> <em>Compression and Profiling of Machine Learning Models in Biomedical Embedded Sensing</em>
                  <br />
                  <strong>More Information:</strong> <a href="https://www.xras.org/public/requests/242649-ACCESS-CIS250603" target="_blank" rel="noopener noreferrer">https://www.xras.org/public/requests/242649-ACCESS-CIS250603</a>
                </p>
              </div>
            </div>
            <div className="nsf-image-area">
              <img 
                className="nsf-main-image"
                src="https://uits.iu.edu/services/hardware/images/data-center-61.jpg"
                alt="National Data Center"
              />
              <div className="nsf-supported-by">
                Supported by <img src="https://esm.sh/@xras/ui@onramps_v1/dist/access_logo.png" alt="NSF ACCESS Logo" className="nsf-access-logo-small" />
              </div>
            </div>
          </div>
        </div>
        {/* Section Arrow */}
        <button 
          className="section-arrow"
          onClick={() => scrollToNextSection('.collaborate-section')}
          aria-label="Scroll to next section"
        >
          <FaChevronDown />
        </button>
      </section>

      {/* Duplicate of Second Section */}
      <section className="collaborate-section">
        <div className="container">
          <div className="research-layout">
            {/* Who We Are Section */}
            <div className="who-we-are">
              <h2>Catalyze the Next Wave of Innovation</h2>
              <div className="who-we-are-content">
                <p>
                  <span className="highlight">Capicú Technologies is building more than embedded systems — we're building a platform for translational innovation. </span> 
                  Our work thrives at the intersection of academic discovery and commercial deployment, and we actively collaborate with researchers, technical teams, and institutions ready to transform ideas into high-impact, deployable solutions.
                  <span className="highlight"> We partnerships around:</span>
                </p>
                <ul className="partnership-list">
                  <li>Co-developing next-gen technologies in embedded AI, biosignal processing, and portable diagnostics</li>
                  <li>Pursuing joint funding through programs like NSF SBIR/STTR, NIH SEED, and the new NSF TTP-E/T/P tracks</li>
                  <li>Validating early-stage IP through prototyping, performance benchmarking, and embedded system integration</li>
                  <li>Launching new ventures or licensing paths for sensor-driven platforms and ML-enabled biotech tools</li>
                </ul>
                <p>
                  Whether you're a PI, postdoc, early-stage founder, or research institute, we're here to help bridge the gap between bold ideas and real-world impact.
                </p>
              </div>
            </div>

            {/* Funding Opportunities Grid */}
            <div className="funding-grid">
              <div className="funding-row">
                <div className="funding-container">
                  <div className="funding-placeholder">
                    <img 
                      src="https://cdn.shopify.com/s/files/1/0645/3539/6514/files/SeedFund_Big1_1_480x480.png?v=1729852255" 
                      alt="NSF SBIR/STTR"
                      className="funding-logo"
                    />
                  </div>
                </div>
                
                <div className="funding-container">
                  <div className="funding-placeholder">
                    <img 
                      src="https://seed.nih.gov/images/SEEDblue.png" 
                      alt="NIH SEED"
                      className="funding-logo"
                    />
                  </div>
                </div>
              </div>
              
              <div className="funding-row">
                <div className="funding-container">
                  <div className="funding-placeholder">
                    <img 
                      src="https://www.in-icorps.org/wp-content/uploads/2022/08/icorps-logo-hires.png" 
                      alt="NSF I-Corps"
                      className="funding-logo"
                    />
                  </div>
                </div>
                
                <div className="funding-container">
                  <div className="funding-placeholder">
                    <img 
                      src="https://assets.noviams.com/novi-file-uploads/nacce/members/venturewell_logo_with_tagline-12-1.png" 
                      alt="VentureWell"
                      className="funding-logo"
                    />
                  </div>
                </div>
              </div>
              
              <div className="funding-row">
                <div className="funding-container">
                  <div className="funding-placeholder">
                    <img 
                      src="https://static1.squarespace.com/static/649b3695fd94c36d020c7569/t/6502b8907b90e7795dd7af0e/1753378784270/"
                      alt="Activate"
                      className="funding-logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Section Arrow */}
        <button 
          className="section-arrow"
          onClick={() => scrollToNextSection('.team-section')}
          aria-label="Scroll to next section"
        >
          <FaChevronDown />
        </button>
      </section>

      {/* Fifth Section - Team (empty for now) */}
      <section 
        ref={teamRef}
        className="team-section"
        style={{ 
          backgroundImage: `url(${mayaguezBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="team-content">
          <div className="team-grid">
            {/* Left: Location/UPRM */}
            <div className="team-location">
              <h3>Our Ecosystem & Leadership</h3>
              <p>
              Capicú Technologies operates from Mayagüez, Puerto Rico, a hub of engineering talent and applied scientific research. Our work is deeply connected to the University of Puerto Rico at Mayagüez (UPRM) — one of the nation’s leading Hispanic-Serving Institutions and a recognized leader in STEM education, embedded systems, and biosignal research.
              We collaborate closely with academic and institutional partners to prototype, validate, and scale technologies at the intersection of edge computing, biomedical sensing, and molecular analytics.              </p>
            </div>
            {/* Right: Team Members Row */}
            <div className="team-members-row">
              <div className="team-member">
                <img src={sebastianHeadshot} alt="Sebastián A. Cruz Romero" className="team-photo" />
                <div className="team-member-content">
                  <h4>Sebastián A. Cruz Romero</h4>
                  <p className="team-bio">
                  Sebastián leads Capicú’s technical strategy, with expertise in machine learning, biomedical informatics, and application development. He drives our applied research efforts toward deployable, scalable solutions across biomedical and biomolecular domains.                  </p>
                  <div className="team-socials">
                    <a href="https://www.linkedin.com/in/romerocruzsa/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://github.com/romerocruzsa" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://orcid.org/0000-0003-3892-2273" target="_blank" rel="noopener noreferrer"><FaOrcid /></a>
                    <a href="https://scholar.google.com/citations?user=8AMcDG0AAAAJ&hl=en" target="_blank" rel="noopener noreferrer"><FaGoogle /></a>
                    <a href="mailto:scruzromero@capicupuertorico.com"><FaEnvelope /></a>
                  </div>
                </div>
              </div>
              <div className="team-member">
                <img src={wilfredoHeadshot} alt="Wilfredo E. Lugo Beauchamp, PhD" className="team-photo" />
                <div className="team-member-content">
                  <h4>Wilfredo E. Lugo Beauchamp, PhD</h4>
                  <p className="team-bio">
                  Assistant Professor at UPRM and Scientific Advisor to Capicú, Dr. Lugo Beauchamp provides critical insight on engineering systems, academic-industry collaboration, and the development of applied R&D pathways that translate to real-world impact.                  </p>
                  <div className="team-socials">
                    <a href="https://www.linkedin.com/in/wilfredo-lugo-beauchamp-0b083838" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://scholar.google.com/citations?user=6IknU_EAAAAJ&hl=en" target="_blank" rel="noopener noreferrer"><FaGoogle /></a>
                    <a href="mailto:wilfredo.lugo@gmail.com"><FaEnvelope /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call-to-Action Button */}
          <button 
            className="team-cta-button"
            onClick={() => window.location.href = "https://capicupuertorico.com/contact"}
            aria-label="CTA Button"
          >
            Partner To Build What’s Next
          </button>
        </div>
      </section>
    </div>
  );
} 