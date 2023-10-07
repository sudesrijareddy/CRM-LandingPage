import './App.css';
import axios from 'axios';
import React, { useRef ,useState,useEffect} from 'react';
import CourseApp from './Components/CourseApp';
import NavigationBar from './Components/NavigationBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import SignUp from './Components/Signup';


function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);
  const pricingRef = useRef(null);
  const customerRef = useRef(null);
  const contactRef = useRef(null);


  const scrollToSection = (sectionRef) => {
    console.log('Scrolling to:', sectionRef);
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
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
    <div className="App">
        {<BrowserRouter>
          <NavigationBar 
      scrollToSection={scrollToSection}
      homeRef = {homeRef}
       aboutRef={aboutRef}
        featuresRef={featuresRef}
        pricingRef={pricingRef}
        customerRef={customerRef}
        contactRef={contactRef}
         />        
         <Routes>
          <Route path="/" element={<CourseApp 
        homeRef = {homeRef} 
      aboutRef={aboutRef}
        featuresRef={featuresRef}
        pricingRef={pricingRef}
        customerRef={customerRef}
        contactRef={contactRef}
        />}/>
          <Route path="/login" element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>}
    </div>
  );
}

export default App;
