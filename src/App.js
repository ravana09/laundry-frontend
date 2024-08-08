
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/login/Login';
import BubbleAnimation from './Components/BubbleAnimation/BubbleAnimation';
import SignUpPage from './Components/SignUp/SignUpPage';
import MobileVerification from './Components/Verification/MobileVerification';
import SideNavBar from './Components/Home/SideNavbar/SideNavBar';
import Home from './Components/Home/Home/Home';

import CompanyCard from './Components/Home/Card/Card';




function App() {
  return (
    <>
   
    <Router>
    <Routes> 
    <Route path="/" element={<Login/>}/>
      <Route path="/Bubbles" element={<BubbleAnimation />} />
      <Route path="/SignUpPage" element={<SignUpPage />} /> 
      <Route path="/MobileVerification" element={<MobileVerification />} /> 
      <Route path="/Home" element={<Home />} /> 
      <Route path="/SideNavBar" element={<SideNavBar />} /> 
      <Route path="/CompanyCard" element={<CompanyCard />} /> 
       
    </Routes>
    </Router>

    </>
  );
}

export default App;
