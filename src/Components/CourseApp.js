import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Carousel,Row,Col,Button,Form } from 'react-bootstrap';
import {AiFillHtml5,AiFillGithub,AiFillGitlab,AiOutlineInstagram} from 'react-icons/ai';
import {DiDjango,DiGit,DiRuby} from 'react-icons/di';
import {FaCss3Alt,FaReact,FaJava,FaPython,FaNodeJs,FaPhp,FaBootstrap,FaAngular,FaVuejs,FaWhatsapp,FaLinkedin} from 'react-icons/fa';
import {BiLogoJquery,BiLogoPostgresql,BiDownArrowAlt,BiLogoFacebookCircle,BiLogoTwitter} from 'react-icons/bi';
import {MdOutlineEmail} from 'react-icons/md';
import {GrMysql} from 'react-icons/gr';
import image1 from './Images/frontend.png';
import image2 from './Images/backend.png';
import image3 from './Images/frameworks.webp';
import frontend from './Images/frontend-1.jpg';
import backend from './Images/Backend-1.webp';
import fullstack from './Images/full-stack.png';
import about from './Images/about.jpg';
import styles from './CourseApp.module.css';
import UsersList from './UsersList';
import Pagination from './Pagination';

const CourseApp = ({ aboutRef, featuresRef, pricingRef, contactRef,homeRef,customerRef }) => {  
  const [coinsData, setCoinsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(8);

    useEffect( () => {
      axios.get("https://freetestapi.com/api/v1/users")
      .then((response)=>{
        console.log(response.data);
          setCoinsData(response.data);
    }).catch((error)=>{
      console.log(error);
    })      
    }, []);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex);
  return (
    <div>
      <div ref={homeRef}>
        <Carousel className={styles.carousels} indicators={true}>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={image1}
          alt="Firstslide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
     <div ref={aboutRef}>
        <Row>
        <Col xs={12} md={6}>
                <img className={`d-block w-100 ${styles.images}`} src={about} alt="aboutimg"/>
            </Col>
            <Col xs={12} md={6}>
                <h1 className={styles.heading1}>Grow faster, Minimize your costs</h1>
                <h5 className={styles.subheading}>Consolidate multiple tools into one funnel builder with GrowFlow. Get access to powerful features that grow your conversions, AOV, and revenue - one platform, one subscription.</h5>
                <p className={styles.subheading}>"Tell me and I forget. Teach me and I remember. Involve me and I learn. - Xunzi "</p>
            </Col>
        </Row>
     </div>
     <div ref={featuresRef}>
        <Row>
        <Col className={styles.scrollingimgs}>
            <AiFillHtml5/>
            <FaCss3Alt/>
            <GrMysql/>
            <FaReact/>
            <FaJava/>
            <FaPython/>
            <FaNodeJs/>
            <BiLogoJquery/>
            <FaPhp/>
            <FaBootstrap/>
            <DiDjango/>
            <FaAngular/>
            <AiFillGithub/>
            <AiFillGitlab/>
            <DiGit/>
            <BiLogoPostgresql/>
            <FaVuejs/>
            <DiRuby/>
        </Col>
      </Row>
      <Row className={`g-0 ${styles.frontend}`}>
        <Col xs={12} md={6} className={styles.frontendlist}>
            <div>
        <h2 className={styles.frontendheading}>Frontend Technologies</h2>
        <p className={styles.frontpara}>we provide different technologies in frontend terms. You can improve your frontend skillset who wants to become a UI/React Developer to built User-friendly applications.Learn from our courses and become a skilled person.We provide technologies like HTML, CSS, JavaScript and more as mentioned below.</p>
           </div>
        </Col>
        <Col xs={12} md={6}>
        <img
          className={`d-block w-100 ${styles.images}`} 
          src={frontend}
          alt="Firstslide"
        />
        </Col>
      </Row>
      <Row className={`g-0 ${styles.backend}`}>
      <Col xs={12} md={6}>
        <img
          className={`d-block w-100 ${styles.images}`} 
          src={backend}
          alt="Firstslide"
        />
        </Col>
        <Col xs={12} md={6} className={styles.frontendlist}>
            <div>
        <h2 className={styles.frontendheading}>Backend Technologies</h2>
        <p className={styles.frontpara}>we provide different technologies in Backend terms. You can improve your Backend skillset who wants to become a Backend Developer to built productive applications.</p>
            </div>
        </Col>
      </Row>
      <Row className={`g-0 ${styles.backend}`}>
        <Col xs={12} md={6} className={styles.fullstacklist}>
            <div>
        <h2 className={styles.frontendheading}>FullStack Technologies</h2>
        <h5 className={styles.heading5}>Frontend + Backend = FullStack</h5>
        <p className={styles.frontpara}>we provide different technologies in fullstack terms. You can improve your fullstack skillset who wants to become a Fullstack Developer to built complete and effective applications.Learn from our courses and become a skilled person.We provide technologies like HTML, CSS, JavaScript, SQL, Git and more as mentioned below.</p>
           </div>
        </Col>
        <Col xs={12} md={6}>
        <img
          className={`d-block w-100 ${styles.images}`} 
          src={fullstack}
          alt="Firstslide"
        />
        </Col>
      </Row>
    </div>
    <div ref={pricingRef}>
    <h1 className={styles.priceheading}><BiDownArrowAlt/>   Check out our pricings and choose your plans</h1>
     <Row className={styles.pricingrow}>
        <Col md={2} sm={12} className={styles.pricing}>
           <h2>Frontend Course</h2>
            <h5>HTML + CSS + ReactJS</h5>
            <p><strong>Plan Includes:</strong></p>
            <p>Free templates for references</p>
            <p>Free Mock tests</p>
            <p>Video Tutorials</p>
            <h6><strong>Total Price :</strong> 39$/M</h6>
            <Button variant='dark'>Buy Now</Button><br/>
            <span><AiFillHtml5/> <FaCss3Alt/> <FaReact/></span>
        </Col>
        <Col md={2} sm={12} className={styles.pricing}>
        <h2>Backend Course</h2>
            <h5>NodeJS + PHP + MySQL</h5>
            <p><strong>Plan Includes:</strong></p>
            <p>Free templates for references</p>
            <p>Free Mock tests</p>
            <p>Video Tutorials</p>
            <h6><strong>Total Price :</strong> 59$/M</h6>
            <Button variant='dark'>Buy Now</Button><br/>
            <span><FaNodeJs/> <FaPhp/> <GrMysql/></span>
        </Col>
        <Col md={2} sm={12} className={styles.pricing}>
        <h2>FullStack Course</h2>
            <h5>Frontend + Backend</h5>
            <p><strong>Plan Includes:</strong></p>
            <p>Free templates for references</p>
            <p>Free Mock tests</p>
            <p>Video Tutorials</p>
            <h6><strong>Total Price :</strong> 89$/M</h6>
            <Button variant='dark'>Buy Now</Button><br/>
            <span><AiFillHtml5/> <FaReact/> <FaCss3Alt/> <FaNodeJs/></span>
        </Col>
        <Col md={2} sm={12} className={styles.pricing}>
            <h2>Frameworks Course</h2>
            <h5>Angular + Vue + Django</h5>
            <p><strong>Plan Includes:</strong></p>
            <p>Free templates for references</p>
            <p>Free Mock tests</p>
            <p>Video Tutorials</p>
            <h6><strong>Total Price :</strong> 50$/M</h6>
            <Button variant='dark'>Buy Now</Button><br/>
            <span><FaAngular/> <FaVuejs/> <DiDjango/></span>
        </Col>
        <Col md={2} sm={12} className={styles.pricing}>
            <h2>Git Tools Course</h2>
            <h5>Git + GitHub + Gitlab</h5>
            <p><strong>Plan Includes:</strong></p>
            <p>Free templates for references</p>
            <p>Free Mock tests</p>
            <p>Video Tutorials</p>
            <h6><strong>Total Price :</strong> 30$/M</h6>
            <Button variant='dark'>Buy Now</Button><br/>
            <span><DiGit/> <AiFillGithub/> <AiFillGitlab/></span>
        </Col>
     </Row>
    </div>
    <div ref={customerRef}>
           <UsersList usersData={currentPosts} />
            <Pagination
                totalPosts={coinsData.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
    </div>
    <div ref={contactRef}>
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

export default CourseApp