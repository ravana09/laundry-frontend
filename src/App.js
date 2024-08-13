import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/login/Login';
import BubbleAnimation from './Components/BubbleAnimation/BubbleAnimation';
import SignUpPage from './Components/SignUp/SignUpPage';
import MobileVerification from './Components/Verification/MobileVerification';
import SideNavBar from './Components/Home/SideNavbar/SideNavBar';
import Home from './Components/Home/Home/Home';
import CompanyCard from './Components/Home/Card/Card';
import BussinessProfile from './Components/Home/BussinesProfile/BussinessProfile';
import CustomerLeads from './Components/Home/CustomerLeads/CustomerLeads';
import BussinessProfileCard from './Components/Home/BussinesProfile/BussinesProfileCard';
import UserProfile from './Components/Home/UserProfile/UserProfile';
import BoostDetails from './Components/Home/BussinesProfile/BoostDetails';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Bubbles" element={<BubbleAnimation />} />
        <Route path="/SignUpPage" element={<SignUpPage />} />
        <Route path="/MobileVerification" element={<MobileVerification />} />
        <Route path="/Home" element={<Home showSideBar={true} />} />
        <Route path="/SideNavBar" element={<SideNavBar />} />
        <Route path="/BussinessProfileCard" element={<BussinessProfileCard />} />
        <Route path="/BoostDetails" element={<BoostDetails />} />
      
        
       
   
        

        <Route path="/CompanyCard" element={<WithHomeLayout component={<CompanyCard />} />} />
        <Route path="/BussinessProfile" element={<WithHomeLayout component={<BussinessProfile />} />} />
        <Route path="/UserProfile" element={<WithHomeLayout component={<UserProfile />} />} />
        <Route path="/CustomerLeads" element={<WithHomeLayout component={<CustomerLeads />} showSideBar={false} />} />
      </Routes>
    </Router>
  );
}

function WithHomeLayout({ component, showSideBar = true }) {
  return <Home showSideBar={showSideBar}>{component}</Home>;
}

export default App;
