import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './NavigationBar.module.css';
import { NavLink } from 'react-router-dom';
import {Nav,Navbar,Button} from 'react-bootstrap';
import {SiMlflow} from 'react-icons/si';
import {FaBars} from 'react-icons/fa';

const NavigationBar = ({ scrollToSection,aboutRef, featuresRef, pricingRef, contactRef,homeRef,customerRef }) => {
  const[isClicked,setIsClicked] = useState(false);
   
  const handleClick = ()=>{
    setIsClicked(!isClicked);
  }
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark" className={styles.navbar}>
          <Nav className={styles.brand}>
            <Nav.Link to="/">  
            <h5 onClick={() => scrollToSection(homeRef)}> <SiMlflow/> Grow Flow</h5>     
          </Nav.Link>  
          </Nav> 
          <Nav className={isClicked ? `${styles.navlinks} ${styles.active}` : styles.navlinks}>
            <Nav.Link onClick={() => scrollToSection(aboutRef)} href="#about">About Us</Nav.Link>
            <Nav.Link onClick={() => scrollToSection(featuresRef)} href="#features">Features</Nav.Link>
            <Nav.Link onClick={() => scrollToSection(pricingRef)} href="#pricing">Pricing</Nav.Link>
            <Nav.Link  onClick={() => scrollToSection(customerRef)} href='#customers'>Customers</Nav.Link>
            <Nav.Link onClick={() => scrollToSection(contactRef)} href="#contact">Contact Us</Nav.Link>
            <NavLink to="/login" ><Button variant="Dark" className={styles.button}>Sign In</Button></NavLink>
            <NavLink to="/signup"><Button variant="Dark" className={styles.button}>Sign Up</Button></NavLink>
          </Nav>
          <div className={styles.mobile}>
            <i onClick={handleClick} className={isClicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
      </Navbar>
    </div>
  )
}

export default NavigationBar;