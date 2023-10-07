import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Row,Col} from 'react-bootstrap';
import styles from './Signup.module.css';
import { FaEye, FaEyeSlash,FaWhatsapp,FaLinkedin,FaUserAlt } from 'react-icons/fa';
import {AiOutlineInstagram} from 'react-icons/ai';
import {BiLogoFacebookCircle,BiLogoTwitter} from 'react-icons/bi';
import {MdOutlineEmail} from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';
import {FaUserShield} from 'react-icons/fa6'
const SignUp = () => {
  
    const[username,setUserName] = useState('');
    const[nameError,setNameError ] = useState('');
    const[email,setEmail] = useState('');
    const[emailError,setEmailError] = useState('');
    const[password,setPassword] = useState('');
    const[passwordError,setPasswordError] = useState('');
    const[confirmPassword,setConfirmPassword] = useState('');
    const[confirmError,setConfirmError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    //validating username 
  const handleUsername = (event) =>{
    
    setUserName(event.target.value);
      const newErrors=[];
      if (!/^[A-Z]/.test(username)) {
      newErrors.push("Username must start with a capital letter.");
      }
      if (username.length < 8) {
      newErrors.push("Username must be at least 8 characters.");
      }
     if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(username)) {
      newErrors.push("Username must contain letters, numbers, and special characters.");
      }
    // Set the array of errors
    setNameError(newErrors);

  }
  
  //validating email
  const handleEmail = (event) =>{

    setEmail(event.target.value);
    const newErrors = [];

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      newErrors.push("Invalid email address.");
    }

    // Set the array of errors
    setEmailError(newErrors);

  }

  //validating password field
    const handlePassword = (event) =>{
     setPassword(event.target.value);
      const newErrors = [];
    if (!/^[A-Z]/.test(password)) {
    newErrors.push("Username must start with a capital letter.");
    }
    if (password.length < 8) {
    newErrors.push("Username must be at least 8 characters.");
    }
   if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(password)) {
    newErrors.push("Username must contain letters, numbers, and special characters.");
    }
     
    setPasswordError(newErrors);
     
  }

  //validating reenter password field
   const handleConfirmPassword = (event) =>{
    setConfirmPassword(event.target.value);
    const newErrors = [];
     const passwordvalue = event.target.value;
     if(password!==passwordvalue){
      newErrors.push("it should match with password field");
     }
    setConfirmError(newErrors);
   }


    const handleSubmitForm = (event) => {
        event.preventDefault();
    const userId = uuidv4(); // Generate a unique ID for the user
    const newUser = { id: userId, username, email, password };
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));
    console.log(JSON.parse(localStorage.getItem('users')));

    alert("Congratulations! You are successfully registered.");
    window.location.href = '/'; // Change '/' to the URL of your home page

    setUserName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
   }

   const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  
    
    return (
    <div className={styles.main1}>
     <h1 className={styles.heading1}> <FaUserShield size={50}/>   SignUp</h1>
      <div className={styles.formdiv}>
      <Form className={styles.signupform} onSubmit={handleSubmitForm}>
        <Form.Label className={styles.formlabel} htmlFor='username' >User Name</Form.Label>
        <Form.Control
        className={styles.forminput}
        required 
        onChange={handleUsername} 
        name='username' 
        id='username'
        type="text" 
        value={username} 
        placeholder="Enter User Name" />
        {nameError.length>0 && <p className={styles.errortext}>{nameError}</p>}
        <Form.Label className={styles.formlabel} htmlFor='email' >Email:</Form.Label>
        <Form.Control
        className={styles.forminput}
        required
        onChange={handleEmail} 
        name='email' 
        id='email'
        type="email" 
        value={email} 
        placeholder="Enter Email" />
        {emailError.length>0&& <p className={styles.errortext}>{emailError}</p>}
        <Form.Label className={styles.formlabel} htmlFor='password' >Password:</Form.Label>
        <div className={styles.passwordInput}>
        <Form.Control
          className={styles.forminput}
          required
          type={showPassword ? 'text' : 'password'}
          id="password"
          value={password}
          onChange={handlePassword}
          placeholder='Enter Password'
        />
        <span className={styles.toggleicon} onClick={togglePasswordVisibility}>
          {showPassword ?  <FaEye color='#445069' size={25} />:<FaEyeSlash color='#445069' size={25}/> }
        </span>
      </div>
        {passwordError.length>0 && <p className={styles.errortext}>{passwordError}</p>}
        <Form.Label className={styles.formlabel} htmlFor='password' >Re-enter Password:</Form.Label>
        <div className={styles.passwordInput}>
        <Form.Control
        className={styles.forminput} 
        required
        onChange={handleConfirmPassword} 
        value={confirmPassword} 
        name='confirmpassword' 
        id='confirmpassword' 
        type={showConfirmPassword?'text':'password'} 
        placeholder="Re-Enter Password" />
         <span className={styles.toggleicon} onClick={toggleConfirmPasswordVisibility}>
          {showConfirmPassword ?  <FaEye color='#445069' size={25} />:<FaEyeSlash color='#445069' size={25}/> }
        </span>
        </div>
        {confirmError.length>0 && <p className={styles.errortext}>{confirmError}</p>}
        <div style={{display:"flex",justifyContent:"center"}}>
        <button className={styles.signupbtn} type='submit'>Register</button>
        </div>
    </Form> 
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

export default SignUp