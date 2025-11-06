import "./Navbar.css";
import logo from "../logo.png";
import Button from '@mui/material/Button';

// small client-side navigate helper used by anchors
const navigate = (e, path) => {
  if (e) e.preventDefault();
  if (window.location.pathname !== path) {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }
};

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="DYPCET LOGO"/>
      </div>

      <ul className="navbar-links">
        <li className="nav-item">
          <a href="/about/overview" className="nav-link" onClick={(e)=>navigate(e,'/about/overview')}>About</a>
          <ul className="dropdown" aria-label="About submenu">
            <li><a href="/about/overview" onClick={(e)=>navigate(e,'/about/overview')}>Overview</a></li>
            <li><a href="/about/history" onClick={(e)=>navigate(e,'/about/history')}>History</a></li>
            <li><a href="/about/team" onClick={(e)=>navigate(e,'/about/team')}>Leadership</a></li>
          </ul>
        </li>

        <li className="nav-item">
          <a href="/academics/programs" className="nav-link" onClick={(e)=>navigate(e,'/academics/programs')}>Academics</a>
          <ul className="dropdown" aria-label="Academics submenu">
            <li><a href="/academics/programs" onClick={(e)=>navigate(e,'/academics/programs')}>Programs</a></li>
            <li><a href="/academics/departments" onClick={(e)=>navigate(e,'/academics/departments')}>Departments</a></li>
            <li><a href="/academics/syllabus" onClick={(e)=>navigate(e,'/academics/syllabus')}>Syllabus</a></li>
          </ul>
        </li>

        <li className="nav-item">
          <a href="/admissions/apply" className="nav-link" onClick={(e)=>navigate(e,'/admissions/apply')}>Admissions</a>
          <ul className="dropdown" aria-label="Admissions submenu">
            <li><a href="/admissions/apply" onClick={(e)=>navigate(e,'/admissions/apply')}>Apply</a></li>
            <li><a href="/admissions/fees" onClick={(e)=>navigate(e,'/admissions/fees')}>Fees</a></li>
            <li><a href="/admissions/scholarships" onClick={(e)=>navigate(e,'/admissions/scholarships')}>Scholarships</a></li>
          </ul>
        </li>

        <li className="nav-item">
          <a href="/contact/locations" className="nav-link" onClick={(e)=>navigate(e,'/contact/locations')}>Contact</a>
          <ul className="dropdown" aria-label="Contact submenu">
            <li><a href="/contact/locations" onClick={(e)=>navigate(e,'/contact/locations')}>Locations</a></li>
            <li><a href="/contact/enquiries" onClick={(e)=>navigate(e,'/contact/enquiries')}>Enquiries</a></li>
            <li><a href="/contact/support" onClick={(e)=>navigate(e,'/contact/support')}>Support</a></li>
          </ul>
        </li>

        <li className="nav-cta">
          <a href="/admissions/apply" onClick={(e)=>navigate(e,'/admissions/apply')} style={{ textDecoration: 'none' }}>
            <Button variant="outlined">Apply Now</Button>
          </a>
        </li>
      </ul>
    </nav>
  );
}


