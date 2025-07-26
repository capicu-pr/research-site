import { Link } from "react-router-dom";
import logoSolo from "../assets/logo-solo.png";
import "../styles/ResearchNavigation.css";

export default function ResearchNavigation() {
  return (
    <nav className="research-navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src={logoSolo} alt="Capicú Research Logo" />
          <span className="research-label">Research</span>
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Overview</Link>
          {/* <Link to="/achievements" className="nav-link">Achievements</Link> */}
          {/* <Link to="/team" className="nav-link">Team</Link> */}
          {/* <Link to="/collaborate" className="nav-link">Collaborate</Link> */}
          <Link to="https://github.com/capicu-pr" className="nav-link">GitHub</Link>
          <Link to="https://capicupuertorico.com" className="nav-link external">Main Site</Link>
        </div>
      </div>
    </nav>
  );
}