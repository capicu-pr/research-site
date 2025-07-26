import React, { useState } from "react";
import "../styles/ResearchTeam.css";
import sebastiancruz_headshot from "../assets/sebastiancruz_headshot.png";
import luisluna_headshot from "../assets/luisluna_headshot.png";
import ResearchNavigation from "../components/ResearchNavigation";
import {
  FaLinkedin, FaGithub, FaInstagram, FaGlobe, FaEnvelopeOpenText, FaGraduationCap, FaFlask, FaMicrochip
} from "react-icons/fa";

const rndTeam = [
  {
    name: "Sebastián A. Cruz Romero",
    title: "Principal Investigator & Founder",
    role: "Platform Architecture & IP Strategy",
    photo: sebastiancruz_headshot,
    expertise: ["Neural Network Compression", "Embedded AI", "Wearable Technology", "Commercialization Strategy"],
    education: "Ph.D. Candidate, Computer Engineering",
    institution: "University of Puerto Rico at Mayagüez",
    socials: {
      linkedin: "https://www.linkedin.com/in/romerocruzsa",
      github: "https://github.com/romerocruzsa",
      instagram: "https://instagram.com/shojiro001",
      website: "https://romerocruzsa.github.io",
      email: "mailto:scruzromero@capicupuertorico.com"
    }
  },
  {
    name: "Luis G. Luna Betancourt",
    title: "Research Engineer",
    role: "Biomedical Engineering",
    photo: luisluna_headshot,
    expertise: ["Biomedical Sensors", "Signal Processing", "Medical Devices"],
    education: "M.S. Biomedical Engineering",
    institution: "University of Puerto Rico at Mayagüez",
    socials: {
      email: "mailto:lluna@capicupuertorico.com",
      linkedin: "https://www.linkedin.com/in/luis-luna787/",
      github: "https://github.com/luisl7"
    }
  },
  {
    name: "Misael J. Mercado Hernández",
    title: "Research Engineer",
    role: "Edge Computing & IoT",
    photo: "https://avatars.githubusercontent.com/u/78518246?v=4",
    expertise: ["Edge Computing", "IoT Systems", "Power Optimization"],
    education: "M.S. Computer Engineering",
    institution: "University of Puerto Rico at Mayagüez",
    socials: {
      email: "mailto:mmercado@capicupuertorico.com",
      linkedin: "https://www.linkedin.com/in/misael-j-mercado/",
      github: "https://github.com/misaelmercado1"
    }
  },
  {
    name: "Walbert García Cruz",
    title: "Research Engineer",
    role: "Hardware & Instrumentation",
    photo: "https://media.licdn.com/dms/image/v2/D5603AQFvdnBa_c3zAg/profile-displayphoto-shrink_400_400/B56ZVokqVoGoAg-/0/1741216197042?e=1753920000&v=beta&t=D4gudnnSi_EcQNqmBu0WDKp89DUw27MLBqND8DWOfLo",
    expertise: ["Hardware Design", "Instrumentation", "PCB Design"],
    education: "B.S. Electrical Engineering",
    institution: "University of Puerto Rico at Mayagüez",
    socials: {
      email: "mailto:wgarcia@capicupuertorico.com",
      linkedin: "https://www.linkedin.com/in/walbert-garcia/",
      github: "https://github.com/softwal"
    }
  }
];

const advisoryCommittee = [
  {
    name: "Dr. Wilfredo Lugo",
    title: "Scientific Advisory Committee Chair",
    role: "Edge Computing & Distributed Systems",
    photo: "https://edge-computing-upr.github.io/web/images/logos/ecglogo_ver.png",
    expertise: ["Edge Computing", "Distributed Systems", "High Performance Computing"],
    education: "Ph.D. Computer Engineering",
    institution: "University of Puerto Rico at Mayagüez",
    affiliation: "Edge Computing Group Director",
    socials: {
      email: "mailto:wilfredo.lugo1@upr.edu",
      website: "https://edge-computing-upr.github.io/web"
    }
  },
  {
    name: "Dr. María González",
    title: "Scientific Advisory Committee Member",
    role: "Biomedical Engineering",
    photo: "https://via.placeholder.com/150/0b2342/e63946?text=MG",
    expertise: ["Biomedical Sensors", "Medical Device Design", "Clinical Validation"],
    education: "Ph.D. Biomedical Engineering",
    institution: "University of Puerto Rico at Mayagüez",
    affiliation: "Biomedical Engineering Department",
    socials: {
      email: "mailto:maria.gonzalez@upr.edu"
    }
  },
  {
    name: "Dr. Carlos Rodríguez",
    title: "Scientific Advisory Committee Member",
    role: "AI & Machine Learning",
    photo: "https://via.placeholder.com/150/0b2342/e63946?text=CR",
    expertise: ["Machine Learning", "Computer Vision", "AI Ethics"],
    education: "Ph.D. Computer Science",
    institution: "University of Puerto Rico at Río Piedras",
    affiliation: "Computer Science Department",
    socials: {
      email: "mailto:carlos.rodriguez@upr.edu"
    }
  }
];

const researchPartners = [
  {
    name: "Edge Computing Group",
    title: "University of Puerto Rico at Mayagüez",
    role: "Research Collaboration Partner",
    photo: "https://edge-computing-upr.github.io/web/images/logos/ecglogo_ver.png",
    expertise: ["Edge Computing", "Distributed Systems", "High Performance Computing"],
    description: "Leading research group in edge computing and distributed systems, providing expertise in scalable computing solutions.",
    socials: {
      website: "https://edge-computing-upr.github.io/web",
      email: "mailto:wilfredo.lugo1@upr.edu"
    }
  },
  {
    name: "Biomedical Engineering Lab",
    title: "University of Puerto Rico at Mayagüez",
    role: "Research Collaboration Partner",
    photo: "https://via.placeholder.com/150/0b2342/e63946?text=BEL",
    expertise: ["Biomedical Devices", "Signal Processing", "Medical Technology"],
    description: "Specialized laboratory focused on developing innovative biomedical devices and medical technology solutions.",
    socials: {
      email: "mailto:biomedical.lab@upr.edu"
    }
  }
];

function ProfileCard({ profile, type = "team" }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className={`profile-card ${type}-card${flipped ? " flipped" : ""}`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      tabIndex={0}
      aria-label={profile.name + ' profile card'}
    >
      <div className="profile-card-inner">
        <div className="profile-card-front">
          <img src={profile.photo} alt={profile.name} className="profile-photo" />
          <div className="profile-info">
            <div className="profile-name">{profile.name}</div>
            <div className="profile-title">{profile.title}</div>
            <div className="profile-role">{profile.role}</div>
            {profile.education && (
              <div className="profile-education">
                <FaGraduationCap className="education-icon" />
                {profile.education}
              </div>
            )}
            {profile.institution && (
              <div className="profile-institution">{profile.institution}</div>
            )}
          </div>
        </div>
        <div className="profile-card-back">
          <div className="profile-expertise">
            <h4>Expertise</h4>
            <ul>
              {profile.expertise.map((exp, index) => (
                <li key={index}>{exp}</li>
              ))}
            </ul>
          </div>
          <div className="profile-socials">
            {profile.socials.linkedin && <a href={profile.socials.linkedin} aria-label={profile.name + "'s LinkedIn"} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>}
            {profile.socials.github && <a href={profile.socials.github} aria-label={profile.name + "'s GitHub"} target="_blank" rel="noopener noreferrer"><FaGithub /></a>}
            {profile.socials.instagram && <a href={profile.socials.instagram} aria-label={profile.name + "'s Instagram"} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>}
            {profile.socials.website && <a href={profile.socials.website} aria-label={profile.name + "'s Website"} target="_blank" rel="noopener noreferrer"><FaGlobe /></a>}
            {profile.socials.email && <a href={profile.socials.email} aria-label={"Email " + profile.name}><FaEnvelopeOpenText /></a>}
          </div>
        </div>
      </div>
    </div>
  );
}

function PartnerCard({ partner }) {
  return (
    <div className="partner-card">
      <div className="partner-header">
        <img src={partner.photo} alt={partner.name} className="partner-photo" />
        <div className="partner-info">
          <h3>{partner.name}</h3>
          <p className="partner-title">{partner.title}</p>
          <p className="partner-role">{partner.role}</p>
        </div>
      </div>
      <div className="partner-expertise">
        <h4>Areas of Expertise</h4>
        <div className="expertise-tags">
          {partner.expertise.map((exp, index) => (
            <span key={index} className="expertise-tag">{exp}</span>
          ))}
        </div>
      </div>
      <p className="partner-description">{partner.description}</p>
      <div className="partner-socials">
        {partner.socials.website && <a href={partner.socials.website} aria-label={partner.name + "'s Website"} target="_blank" rel="noopener noreferrer"><FaGlobe /></a>}
        {partner.socials.email && <a href={partner.socials.email} aria-label={"Email " + partner.name}><FaEnvelopeOpenText /></a>}
      </div>
    </div>
  );
}

function ProfileCarousel({ profiles, type = "team" }) {
  return (
    <div className="profile-carousel">
      {profiles.map((profile, idx) => (
        <ProfileCard key={idx} profile={profile} type={type} />
      ))}
    </div>
  );
}

function PartnerCarousel({ partners }) {
  return (
    <div className="partner-carousel">
      {partners.map((partner, idx) => (
        <PartnerCard key={idx} partner={partner} />
      ))}
    </div>
  );
}

export default function ResearchTeam() {
  return (
    <div className="research-team-page">
      <ResearchNavigation />
      <div className="research-team-bg" />
      <div className="research-team-intro">
        <div className="research-team-intro-content">
          <h1>Research Team</h1>
          <p>
            Our research team combines expertise in AI, biomedical engineering, edge computing, and hardware design to push the boundaries of wearable technology and embedded AI systems.
          </p>
          <p>
            Supported by a distinguished Scientific Advisory Committee, we maintain the highest standards of research excellence while fostering innovation in the intersection of AI and biomedical technology. 
            Our team is positioned to translate cutting-edge research into commercially viable products.
          </p>
        </div>
      </div>
      <div className="research-team-container">
        <div className="research-team-section">
          <h2 className="research-team-section-title">R&D Team</h2>
          <p className="section-description">
            Our core research team brings together diverse expertise in AI, biomedical engineering, and embedded systems.
          </p>
          <ProfileCarousel profiles={rndTeam} type="team" />
        </div>
        <div className="research-team-section">
          <h2 className="research-team-section-title">Scientific Advisory Committee</h2>
          <p className="section-description">
            Distinguished researchers and experts who guide our research direction and ensure scientific rigor.
          </p>
          <ProfileCarousel profiles={advisoryCommittee} type="advisory" />
        </div>
        <div className="research-team-section">
          <h2 className="research-team-section-title">Research Partners</h2>
          <p className="section-description">
            Academic and institutional partners who collaborate with us on cutting-edge research projects.
          </p>
          <PartnerCarousel partners={researchPartners} />
        </div>
      </div>
    </div>
  );
} 