import React,{useState} from 'react'
import { Form,Row,Col} from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
import { FaEye, FaEyeSlash ,FaWhatsapp,FaLinkedin,FaUserAlt} from 'react-icons/fa';
import {AiOutlineInstagram} from 'react-icons/ai';
import {BiLogoFacebookCircle,BiLogoTwitter} from 'react-icons/bi';
import {MdOutlineEmail} from 'react-icons/md';
import styles from './Signup.module.css';


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  console.log(JSON.parse(localStorage.getItem('users')) || []);
  const handleLogin = (event) => {
    event.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = existingUsers.some(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      alert('Login successful');
      window.location.href = '/'; // Change '/' to the URL of your home page
      setError('');
      setPassword('');
      setEmail('');
      
    } else {
      setError("please check your email and password");
    }
    
  };

  // Clear the error message when typing in the email field
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError('');
  };

  // Clear the error message when typing in the password field
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError('');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.main1}>
           <h1 className={styles.heading1}> <FaUserAlt size={37}/>   Login</h1>
        <div className={styles.formdiv} >
        <Form onSubmit={handleLogin} className={styles.signupform} >
        <Form.Label className={styles.formlabel} htmlFor="email">Email:</Form.Label>
        <Form.Control
          className={styles.forminput} 
          placeholder='Enter Email'
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}    />
        <Form.Label className={styles.formlabel} htmlFor="password">Password:</Form.Label>
        <div className={styles.passwordInput}>
        <Form.Control
          className={styles.forminput} 
          placeholder='Enter Password'
          type={showPassword?'text':'password'}
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <span className={styles.toggleicon} onClick={togglePasswordVisibility}>
          {showPassword ?  <FaEye color='#445069' size={25} />:<FaEyeSlash color='#445069' size={25}/> }
        </span>
        </div>
        <button type='submit' className={styles.signupbtn}>Login</button>
        {error&&<p className={styles.errortext}>{error}</p>}
      </Form>
      <p className={styles.loginpara}>If you are new user, please <NavLink className={styles.signuplink} to="/signup">SignUp</NavLink> Here</p>

        </div>
        <div className={styles.footer}>
        <Row className={styles.contact}>
          <Col className={styles.contacttext} md={5} sm={12}>
          <div className={styles.contactheading}>
           <h5>PLATFORMS</h5>
           <p>W3Schools</p>
           <p>Geeks for geeks</p>
           <p>Quora</p>
           <p>Javatpoint</p>
           </div>
           <div className={styles.contactheading}>
            <h5>SOLUTIONS</h5>
            <p>For Ecommerce</p>
            <p>For Services</p>
            <p>For Agencies</p>
            <p>For Partners</p>
           </div>
           <div className={styles.contactheading}>
              <h5>RESOURCES</h5>
              <p>Blog</p>
              <p>PlayBooks</p>
              <p>Campaign Library</p>
              <p>CTA Examples</p>
              <p>Roundup Newsletter</p>
             </div>
          </Col>
            <Col md={2} sm={12}  >
              <div className={styles.icons}>
            <AiOutlineInstagram/>
            <BiLogoFacebookCircle/>
            <FaWhatsapp/>
            <BiLogoTwitter/>
            <FaLinkedin/>
              </div>
              <p className={styles.copyright}><MdOutlineEmail size={30}/>  <strong>rsrija204@gmail.com</strong></p>
              <p className={styles.copyright}>CopyRight@ All Rights Reserved</p>
            </Col>
            <Col md={5} sm={12} className={styles.form}>
              <h2>Message Us</h2>
              <Form className={styles.msgform} >
      <Form.Group className="mb-3" controlId="email">
        <Form.Control required className={styles.forminput} type="email" placeholder="Enter your email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="subject">
        <Form.Control required className={styles.forminput} placeholder='Subject' type="text"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="message">
        <Form.Control required className={styles.forminput} as="textarea" type='text' placeholder='Leave a Message' rows={3} />
      </Form.Group>
      <button>Send Message</button>
    </Form>
            </Col>
        </Row>
    </div>
    </div>
  )
}

export default Login;