import "./Navbar.css";
import logo from "../logo.png";
import Button from '@mui/material/Button';


export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="DYPCET LOGO"/>
      </div>
      <div className="navbar-links">
        <a href="#about">About</a>
        <a href="#academics">Academics</a>
        <a href="#admissions">Admissions</a>
        <a href="#contact">Contact</a>
        <Button variant="outlined">Apply Now</Button>
      </div>
    </nav>
  );
}


