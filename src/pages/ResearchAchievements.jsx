import { FaAward, FaFileAlt, FaGithub, FaExternalLinkAlt, FaUniversity, FaMicrochip, FaFlask, FaRocket, FaChartLine, FaShieldAlt } from "react-icons/fa";
import ResearchNavigation from "../components/ResearchNavigation";
import "../styles/ResearchAchievements.css";

export default function ResearchAchievements() {
  const publications = [
    {
      title: "Edge AI in Biomedical Wearables: A Federated Learning Approach",
      authors: "Cruz Romero, S.A., Luna Betancourt, L.G., Mercado Hernández, M.J., García Cruz, W.",
      journal: "IEEE Global Humanitarian Technology Conference (GHTC)",
      year: "2024",
      status: "Published",
      impact: "First implementation of reliable Edge AI for remote biosignal collection",
      abstract: "This paper presents one of the first implementations to show reliable Edge AI for remote biosignal collection and analysis using non-visual sensors. We demonstrate federated learning protocols that enable collaborative model training across distributed wearable devices.",
      link: "https://arxiv.org/abs/XXXXX",
      tags: ["Edge AI", "Federated Learning", "Biomedical Wearables", "Signal Processing"]
    },
    {
      title: "Federated Edge Learning for Distributed Biosensor Networks",
      authors: "Cruz Romero, S.A., Lugo, W., et al.",
      journal: "Journal of Biomedical Engineering",
      year: "2024",
      status: "Under Review",
      impact: "Novel approach to collaborative inference in resource-constrained environments",
      abstract: "We present a novel framework for federated edge learning in distributed biosensor networks, enabling real-time collaborative inference while maintaining data privacy and reducing computational overhead.",
      link: "#",
      tags: ["Federated Learning", "Biosensor Networks", "Privacy", "Edge Computing"]
    }
  ];

  const grants = [
    {
      title: "NSF ACCESS Award (CIS250603)",
      pi: "Sebastián A. Cruz Romero",
      amount: "$50,000",
      duration: "2024-2025",
      status: "Active",
      description: "Advancing federated edge learning over LoRa using biomedical wearables and spectrometric data streams",
      outcomes: [
        "Training models collaboratively across wearables",
        "Building generalizable signal decoders",
        "Reducing central computation requirements",
        "Enabling real-time edge inference"
      ],
      link: "https://access-ci.org/allocations/cis250603"
    },
    {
      title: "UPRM Edge Computing Collaboration",
      pi: "Dr. Wilfredo Lugo",
      amount: "In-kind resources",
      duration: "2023-2025",
      status: "Active",
      description: "Distributed sensor networks for biomedical applications",
      outcomes: [
        "Real-time biosignal processing",
        "Heterogeneous sensor integration",
        "Edge computing infrastructure",
        "Academic-industry partnership"
      ],
      link: "https://edge-computing-upr.github.io/web"
    }
  ];

  const patents = [
    {
      title: "Edge AI Platform for Biosensor Analytics",
      inventors: "Cruz Romero, S.A., Luna Betancourt, L.G.",
      status: "Patent Pending",
      filingDate: "2024",
      description: "A novel edge computing platform that enables real-time analysis of biosensor data using lightweight AI models",
      applications: ["Medical diagnostics", "Wearable health monitoring", "Laboratory automation"]
    },
    {
      title: "Federated Learning Protocol for Distributed Sensors",
      inventors: "Cruz Romero, S.A., Mercado Hernández, M.J.",
      status: "Patent Pending",
      filingDate: "2024",
      description: "A secure federated learning protocol that enables collaborative model training across distributed sensor networks",
      applications: ["IoT networks", "Privacy-preserving AI", "Edge computing"]
    }
  ];

  const achievements = [
    {
      title: "IEEE GHTC Best Paper Award",
      year: "2024",
      description: "Recognition for outstanding contribution to humanitarian technology through edge AI research",
      icon: <FaAward />
    },
    {
      title: "NSF ACCESS Allocation",
      year: "2024",
      description: "Competitive allocation for high-performance computing resources supporting edge AI research",
      icon: <FaUniversity />
    },
    {
      title: "UPRM Research Excellence",
      year: "2024",
      description: "Recognition for innovative research bridging academic rigor with commercial applications",
      icon: <FaRocket />
    }
  ];

  const collaborations = [
    {
      name: "Edge Computing Group",
      institution: "University of Puerto Rico at Mayagüez",
      type: "Academic Research",
      focus: "Distributed systems and edge computing",
      outcomes: ["Joint publications", "Shared infrastructure", "Student exchanges"],
      logo: "https://edge-computing-upr.github.io/web/images/logos/ecglogo_ver.png"
    },
    {
      name: "CDI Labs",
      institution: "Commercial Partner",
      type: "Industry Collaboration",
      focus: "Technology commercialization",
      outcomes: ["SBIR/STTR support", "Market access", "Commercialization expertise"],
      logo: "https://via.placeholder.com/120x60/0b2342/e63946?text=CDI"
    }
  ];

  return (
    <div className="research-achievements">
      <ResearchNavigation />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Research Achievements & Publications</h1>
          <p className="tagline">
            Our research combines academic excellence with commercial viability, producing both peer-reviewed publications 
            and patent-pending technologies that advance the state of the art in edge AI and biomedical instrumentation.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <FaFileAlt className="stat-icon" />
              <span className="stat-number">2</span>
              <span className="stat-label">Publications</span>
            </div>
            <div className="stat">
              <FaAward className="stat-icon" />
              <span className="stat-number">1</span>
              <span className="stat-label">NSF Grant</span>
            </div>
            <div className="stat">
              <FaShieldAlt className="stat-icon" />
              <span className="stat-number">2</span>
              <span className="stat-label">Patents Pending</span>
            </div>
            <div className="stat">
              <FaUniversity className="stat-icon" />
              <span className="stat-number">3</span>
              <span className="stat-label">Collaborations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="publications-section">
        <div className="container">
          <h2>Publications</h2>
          <p className="section-intro">
            Our research is published in peer-reviewed venues, demonstrating both academic rigor and practical impact.
          </p>
          
          <div className="publications-grid">
            {publications.map((pub, index) => (
              <div key={index} className="publication-card">
                <div className="publication-header">
                  <h3>{pub.title}</h3>
                  <span className="publication-status">{pub.status}</span>
                </div>
                <div className="publication-meta">
                  <p className="publication-authors">{pub.authors}</p>
                  <p className="publication-journal">{pub.journal}, {pub.year}</p>
                </div>
                <div className="publication-impact">
                  <strong>Impact:</strong> {pub.impact}
                </div>
                <p className="publication-abstract">{pub.abstract}</p>
                <div className="publication-tags">
                  {pub.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="publication-links">
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className="publication-link">
                    <FaExternalLinkAlt /> View Paper
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grants Section */}
      <section className="grants-section">
        <div className="container">
          <h2>Research Grants & Funding</h2>
          <p className="section-intro">
            Our research is supported by competitive federal grants and institutional partnerships.
          </p>
          
          <div className="grants-grid">
            {grants.map((grant, index) => (
              <div key={index} className="grant-card">
                <div className="grant-header">
                  <h3>{grant.title}</h3>
                  <span className="grant-status">{grant.status}</span>
                </div>
                <div className="grant-meta">
                  <p><strong>PI:</strong> {grant.pi}</p>
                  <p><strong>Amount:</strong> {grant.amount}</p>
                  <p><strong>Duration:</strong> {grant.duration}</p>
                </div>
                <p className="grant-description">{grant.description}</p>
                <div className="grant-outcomes">
                  <h4>Key Outcomes:</h4>
                  <ul>
                    {grant.outcomes.map((outcome, outcomeIndex) => (
                      <li key={outcomeIndex}>{outcome}</li>
                    ))}
                  </ul>
                </div>
                <div className="grant-links">
                  <a href={grant.link} target="_blank" rel="noopener noreferrer" className="grant-link">
                    <FaExternalLinkAlt /> View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patents Section */}
      <section className="patents-section">
        <div className="container">
          <h2>Intellectual Property</h2>
          <p className="section-intro">
            Our research has resulted in patent-pending technologies that bridge academic innovation with commercial applications.
          </p>
          
          <div className="patents-grid">
            {patents.map((patent, index) => (
              <div key={index} className="patent-card">
                <div className="patent-header">
                  <h3>{patent.title}</h3>
                  <span className="patent-status">{patent.status}</span>
                </div>
                <div className="patent-meta">
                  <p><strong>Inventors:</strong> {patent.inventors}</p>
                  <p><strong>Filing Date:</strong> {patent.filingDate}</p>
                </div>
                <p className="patent-description">{patent.description}</p>
                <div className="patent-applications">
                  <h4>Applications:</h4>
                  <ul>
                    {patent.applications.map((app, appIndex) => (
                      <li key={appIndex}>{app}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <div className="container">
          <h2>Achievements & Recognition</h2>
          <p className="section-intro">
            Our research excellence has been recognized through awards, competitive grants, and institutional partnerships.
          </p>
          
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-icon">
                  {achievement.icon}
                </div>
                <div className="achievement-content">
                  <h3>{achievement.title}</h3>
                  <span className="achievement-year">{achievement.year}</span>
                  <p>{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations Section */}
      <section className="collaborations-section">
        <div className="container">
          <h2>Research Collaborations</h2>
          <p className="section-intro">
            We maintain strategic partnerships with academic institutions and industry partners to advance our research agenda.
          </p>
          
          <div className="collaborations-grid">
            {collaborations.map((collab, index) => (
              <div key={index} className="collaboration-card">
                <div className="collaboration-header">
                  <img src={collab.logo} alt={collab.name} className="collaboration-logo" />
                  <div className="collaboration-info">
                    <h3>{collab.name}</h3>
                    <p className="collaboration-institution">{collab.institution}</p>
                    <span className="collaboration-type">{collab.type}</span>
                  </div>
                </div>
                <p className="collaboration-focus"><strong>Focus:</strong> {collab.focus}</p>
                <div className="collaboration-outcomes">
                  <h4>Outcomes:</h4>
                  <ul>
                    {collab.outcomes.map((outcome, outcomeIndex) => (
                      <li key={outcomeIndex}>{outcome}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercialization Impact */}
      <section className="impact-section">
        <div className="container">
          <h2>Research to Commercialization Impact</h2>
          <p className="section-intro">
            Our academic research directly informs our commercial platform development, ensuring scientific rigor translates to real-world impact.
          </p>
          
          <div className="impact-grid">
            <div className="impact-card">
              <h3>Academic Foundation</h3>
              <p>Peer-reviewed publications establish our technical credibility and research excellence in the academic community.</p>
              <ul>
                <li>IEEE GHTC publication on edge AI</li>
                <li>NSF ACCESS grant for federated learning</li>
                <li>University partnerships and collaborations</li>
              </ul>
            </div>
            
            <div className="impact-card">
              <h3>Commercial Translation</h3>
              <p>Our research findings are systematically translated into patent-pending technologies and commercial products.</p>
              <ul>
                <li>Edge AI platform for biosensor analytics</li>
                <li>Federated learning protocols for IoT</li>
                <li>SBIR/STTR commercialization pathways</li>
              </ul>
            </div>
            
            <div className="impact-card">
              <h3>Market Validation</h3>
              <p>Industry partnerships and collaborations validate the commercial potential of our research innovations.</p>
              <ul>
                <li>CDI Labs commercialization partnership</li>
                <li>Biomedical device industry connections</li>
                <li>Strategic IP protection and licensing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 