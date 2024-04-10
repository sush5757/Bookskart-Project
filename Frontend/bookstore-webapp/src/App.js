import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
// import TutorRegistration from './Components/TutorRegistration';
// import StudentRegistration from './Components/StudentRegistration';
import LandingPage from './Components/LandingPage';
import Register from './Components/Register';
//import ForgetPassword from './Components/forgetp';
// import About from "./components/about/About"
// import CourseHome from "./Components/allcourses/CourseHome"
// import Team from "./components/team/Team"
// import Pricing from "./components/pricing/Pricing"
// import Blog from "./components/blog/Blog"
// import Contact from "./components/contact/Contact"
// //import Footer from "./components/common/footer/Footer"
// import Home from "./components/home/Home"

function App() {
  return (
    <>
      <Routes>
      <Route path='/' element={<LandingPage/>} />
         <Route path='login' element={<Login />} /> 
       
        <Route path='/register' element={<Register/>}/>
        // {/* <Route path='/forget' element={<ForgetPassword/>}/>
        // <Route exact path='/about' component={About} /> 
        {/* <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/courses' component={CourseHome} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/journal' component={Blog} />
          <Route exact path='/contact' component={Contact} /> */}
      </Routes>
    </>
  );
}

export default App;
