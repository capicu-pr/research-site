import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "../styles/ResearchFooter.css";

export default function Footer() {
  return (
    <footer className="footer b2b-footer">
      <div className="footer-content">
        <div className="footer-col brand-col">
          <div className="footer-logo">Capicú</div>
          <div className="footer-tagline">Making AI fit anywhere.</div>
        </div>
        {/* <div className="footer-col">
          <div className="footer-col-title">Product</div>
          <Link to="/features">Features</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/demo">Demo</Link>
        </div> */}
        <div className="footer-col">
          <Link to="https://capicupuertorico.com/"><div className="footer-col-title">Company</div></Link>
          <Link to="https://capicupuertorico.com/about">About</Link>
          <Link to="/">Research</Link>
          <Link to="https://capicupuertorico.com/contact">Contact</Link>
          <Link to="https://capicupuertorico.com/blog">Blog</Link>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Resources</div>
          {/* <a href="https://docs.capicu.com" target="_blank" rel="noopener noreferrer">Docs</a> */}
          <Link to="https://capicupuertorico.com/blog">Blog</Link>
          {/* <Link to="/support">Support</Link> */}
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copyright">
          {/* &copy; */}
          Capicú Technologies LLC, Est. {new Date().getFullYear()}. All rights reserved.
        </div>
        <div className="footer-legal">
          <Link to="https://capicupuertorico.com/privacy">Privacy Policy</Link>
          <span>·</span>
          {/* <Link to="/terms">Terms</Link> */}
        </div>
        <div className="footer-socials">
          <a href="https://instagram.com/capicu.pr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com/company/capicu-pr" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/capicu-pr" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}