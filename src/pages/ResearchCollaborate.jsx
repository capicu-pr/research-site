import { useForm, ValidationError } from "@formspree/react";
import { FaHandshake, FaUniversity, FaFlask, FaMicrochip, FaHeartbeat, FaBrain, FaUsers, FaEnvelopeOpenText, FaGlobe, FaPhone } from "react-icons/fa";
import ResearchNavigation from "../components/ResearchNavigation";
import "../styles/ResearchCollaborate.css";

export default function ResearchCollaborate() {
  const [state, handleSubmit] = useForm("mnnddqko");

  const collaborationAreas = [
    {
      title: "Wearable Technology Development",
      description: "Collaborate on next-generation wearable devices with embedded AI capabilities for continuous health monitoring.",
      icon: <FaHeartbeat />,
      focus: ["Biomedical sensors", "Real-time processing", "Low-power design", "Clinical validation"]
    },
    {
      title: "Embedded AI Systems",
      description: "Develop intelligent sensor systems that can process data locally while maintaining high accuracy.",
      icon: <FaMicrochip />,
      focus: ["Edge computing", "Model compression", "Hardware optimization", "Power efficiency"]
    },
    {
      title: "Biomedical Instrumentation",
      description: "Advance medical device technology through AI integration and miniaturization.",
      icon: <FaFlask />,
      focus: ["Medical devices", "Signal processing", "Clinical trials", "Regulatory compliance"]
    },
    {
      title: "Academic Research Partnerships",
      description: "Joint research initiatives with universities and research institutions.",
      icon: <FaUniversity />,
      focus: ["Grant applications", "Student exchanges", "Joint publications", "Shared resources"]
    }
  ];

  const partnershipTypes = [
    {
      type: "Academic Institutions",
      description: "Universities and research institutions with expertise in biomedical engineering, computer science, or related fields.",
      benefits: ["Access to cutting-edge research", "Student and faculty exchanges", "Joint grant opportunities", "Shared laboratory resources"],
      ideal: ["Biomedical engineering departments", "Computer science programs", "Engineering schools", "Medical schools"]
    },
    {
      type: "Research Laboratories",
      description: "Specialized research labs focused on wearable technology, embedded systems, or biomedical devices.",
      benefits: ["Specialized expertise", "Advanced equipment access", "Industry connections", "Publication opportunities"],
      ideal: ["Biomedical device labs", "IoT research groups", "AI/ML laboratories", "Medical technology centers"]
    },
    {
      type: "Industry Partners",
      description: "Companies working in medical technology, wearable devices, or embedded systems.",
      benefits: ["Industry expertise", "Market insights", "Commercialization pathways", "Funding opportunities"],
      ideal: ["Medical device companies", "Wearable technology firms", "IoT companies", "Healthcare technology startups"]
    }
  ];

  const currentPartners = [
    {
      name: "Edge Computing Group",
      institution: "University of Puerto Rico at Mayagüez",
      focus: "Edge Computing & Distributed Systems",
      logo: "https://edge-computing-upr.github.io/web/images/logos/ecglogo_ver.png",
      description: "Leading research group in edge computing and distributed systems, providing expertise in scalable computing solutions for wearable devices."
    },
    {
      name: "Biomedical Engineering Lab",
      institution: "University of Puerto Rico at Mayagüez",
      focus: "Biomedical Devices & Signal Processing",
      logo: "https://via.placeholder.com/150/0b2342/e63946?text=BEL",
      description: "Specialized laboratory focused on developing innovative biomedical devices and medical technology solutions."
    }
  ];

  return (
    <div className="research-collaborate">
      <ResearchNavigation />
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Collaborate With Our Research Team</h1>
          <p className="tagline">
            We're actively seeking partnerships with academic institutions, research laboratories, and industry partners working at the forefront of wearable technologies, embedded sensors, and biomedical instrumentation. 
            Our goal is to translate cutting-edge research into commercially viable products that solve real-world problems.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">4+</span>
              <span className="stat-label">Research Areas</span>
            </div>
            <div className="stat">
              <span className="stat-number">3</span>
              <span className="stat-label">Partnership Types</span>
            </div>
            <div className="stat">
              <span className="stat-number">2</span>
              <span className="stat-label">Current Partners</span>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Areas Section */}
      <section className="collaboration-areas-section">
        <h2>Research Collaboration Areas</h2>
        <p className="section-description">
          We focus on four key areas where we seek collaborative partnerships to advance the state of wearable AI and biomedical technology.
        </p>
        <div className="collaboration-areas-grid">
          {collaborationAreas.map((area, index) => (
            <div key={index} className="collaboration-area-card">
              <div className="area-icon">
                {area.icon}
              </div>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <div className="area-focus">
                <h4>Focus Areas:</h4>
                <ul>
                  {area.focus.map((focus, focusIndex) => (
                    <li key={focusIndex}>{focus}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership Types Section */}
      <section className="partnership-types-section">
        <h2>Partnership Types</h2>
        <p className="section-description">
          We welcome different types of partnerships to create a diverse and robust research ecosystem.
        </p>
        <div className="partnership-types-grid">
          {partnershipTypes.map((type, index) => (
            <div key={index} className="partnership-type-card">
              <h3>{type.type}</h3>
              <p className="type-description">{type.description}</p>
              <div className="type-benefits">
                <h4>Partnership Benefits</h4>
                <ul>
                  {type.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex}>{benefit}</li>
                  ))}
                </ul>
              </div>
              <div className="type-ideal">
                <h4>Ideal Partners</h4>
                <ul>
                  {type.ideal.map((ideal, idealIndex) => (
                    <li key={idealIndex}>{ideal}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Current Partners Section */}
      <section className="current-partners-section">
        <h2>Current Research Partners</h2>
        <p className="section-description">
          We're proud to collaborate with these leading institutions and research groups.
        </p>
        <div className="current-partners-grid">
          {currentPartners.map((partner, index) => (
            <div key={index} className="current-partner-card">
              <div className="partner-logo">
                <img src={partner.logo} alt={partner.name} />
              </div>
              <div className="partner-info">
                <h3>{partner.name}</h3>
                <p className="partner-institution">{partner.institution}</p>
                <p className="partner-focus">{partner.focus}</p>
                <p className="partner-description">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Commercialization Opportunities */}
      <section className="commercialization-opportunities-section">
        <h2>Commercialization Opportunities</h2>
        <p className="section-description">
          Beyond research collaboration, we offer unique opportunities for partners to participate in our commercialization journey.
        </p>
        
        <div className="opportunities-grid">
          <div className="opportunity-card">
            <h3>SBIR/STTR Partnerships</h3>
            <p>Collaborate on federal grant applications for technology commercialization, leveraging our NSF ACCESS research foundation.</p>
            <ul>
              <li>Joint proposal development</li>
              <li>Shared intellectual property</li>
              <li>Commercialization expertise</li>
              <li>Market access opportunities</li>
            </ul>
          </div>
          
          <div className="opportunity-card">
            <h3>Technology Licensing</h3>
            <p>Access our patented and patent-pending technologies for your own product development and commercialization efforts.</p>
            <ul>
              <li>Edge AI platform licensing</li>
              <li>Biosensor analytics technology</li>
              <li>Custom development services</li>
              <li>Technical support and training</li>
            </ul>
          </div>
          
          <div className="opportunity-card">
            <h3>Joint Venture Development</h3>
            <p>Form strategic partnerships to develop and commercialize new products based on our research platform.</p>
            <ul>
              <li>Co-development agreements</li>
              <li>Shared market access</li>
              <li>Joint intellectual property</li>
              <li>Revenue sharing models</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Start a Collaboration</h2>
        <p className="section-description">
          Ready to explore partnership opportunities? Get in touch with our research team to discuss potential collaborations.
        </p>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>We're always interested in discussing new research partnerships and collaboration opportunities.</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <FaEnvelopeOpenText className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <p>research@capicupuertorico.com</p>
                </div>
              </div>
              <div className="contact-method">
                <FaPhone className="contact-icon" />
                <div>
                  <h4>Phone</h4>
                  <p>+1 (787) XXX-XXXX</p>
                </div>
              </div>
              <div className="contact-method">
                <FaGlobe className="contact-icon" />
                <div>
                  <h4>Website</h4>
                  <p>capicupuertorico.com</p>
                </div>
              </div>
            </div>

            <div className="response-time">
              <h4>Response Time</h4>
              <p>We typically respond to collaboration inquiries within 2-3 business days.</p>
            </div>
          </div>
          
          <div className="contact-form-container">
            {state.succeeded ? (
              <div className="contact-success">
                <h3>Thank you for your interest!</h3>
                <p>Your collaboration inquiry has been sent. Our research team will review your proposal and get back to you within 2-3 business days.</p>
                <p>We look forward to exploring potential partnership opportunities with you.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="collaboration-form">
                <h3>Collaboration Inquiry</h3>
                
                <div className="form-row">
                  <label htmlFor="name">
                    Name *
                    <input id="name" type="text" name="name" required />
                  </label>
                  <ValidationError prefix="Name" field="name" errors={state.errors} />

                  <label htmlFor="email">
                    Email *
                    <input id="email" type="email" name="email" required />
                  </label>
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div className="form-row">
                  <label htmlFor="institution">
                    Institution/Organization *
                    <input id="institution" type="text" name="institution" required />
                  </label>
                  <ValidationError prefix="Institution" field="institution" errors={state.errors} />

                  <label htmlFor="position">
                    Position/Title
                    <input id="position" type="text" name="position" />
                  </label>
                </div>

                <label htmlFor="partnership-type">
                  Partnership Type of Interest *
                  <select id="partnership-type" name="partnership-type" required>
                    <option value="">Select partnership type</option>
                    <option value="academic">Academic Institution</option>
                    <option value="research-lab">Research Laboratory</option>
                    <option value="industry">Industry Partner</option>
                    <option value="other">Other</option>
                  </select>
                </label>

                <label htmlFor="research-area">
                  Primary Research Area of Interest *
                  <select id="research-area" name="research-area" required>
                    <option value="">Select research area</option>
                    <option value="wearable-technology">Wearable Technology Development</option>
                    <option value="embedded-ai">Embedded AI Systems</option>
                    <option value="biomedical-instrumentation">Biomedical Instrumentation</option>
                    <option value="academic-research">Academic Research Partnerships</option>
                    <option value="other">Other</option>
                  </select>
                </label>

                <label htmlFor="expertise">
                  Your Expertise/Research Focus
                  <textarea id="expertise" name="expertise" rows="3" placeholder="Describe your research expertise and current focus areas..." />
                </label>

                <label htmlFor="proposal">
                  Collaboration Proposal *
                  <textarea id="proposal" name="proposal" rows="5" placeholder="Describe your proposed collaboration, including research goals, potential outcomes, and any specific requirements..." required />
                </label>
                <ValidationError prefix="Proposal" field="proposal" errors={state.errors} />

                <label htmlFor="timeline">
                  Proposed Timeline
                  <input id="timeline" type="text" name="timeline" placeholder="e.g., 6-12 months, ongoing partnership, etc." />
                </label>

                <button type="submit" className="submit-button" disabled={state.submitting}>
                  {state.submitting ? "Sending..." : "Submit Collaboration Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
} 