import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import logo from '../assets/img/UX_Design_Portfolio_Blog.jpg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt='Logo' style={{width:'200px', height:'100px'}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" style={{marginLeft:'200px'}}>
          <Nav className="me-auto">
            <Nav.Link style={{color:'grey', fontSize:'17px'}} href="#home" className={activeLink === 'home' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link style={{color:'grey', fontSize:'17px'}} href="#skills" className={activeLink === 'skills' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link style={{color:'grey', fontSize:'17px'}} href="#projects" className={activeLink === 'projects' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href="https://www.linkedin.com/in/manpreet-singh-34b962267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={navIcon1} alt='Social Icon 1' /></a>
              <a href="https://www.facebook.com/profile.php?id=100027083291838&mibextid=ZbWKwL"><img src={navIcon2} alt='Social Icon 2' /></a>
              <a href="https://www.instagram.com/manpreet_singh684?igsh=MWp5Nnh4dmF0ZnB4dQ=="><img src={navIcon3} alt='Social Icon 3' /></a>
            </div>
            <button className='vvd' onClick={() => console.log("connect")}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
