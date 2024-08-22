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
import BussinessLogin from './Components/login/BussinessLogin';
import BussinesSignUp from './Components/SignUp/BussinesSignUp';
import BussinessMobileVErification from './Components/Verification/BussinessMobileVErification';
import BussinessForgetPassword from './Components/FogetPassword/BusinessForgetPassword/BusinessForgetePAssword';
import BussinessForgetMobileVerification from './Components/Verification/ForgetPasswordVerification/BussinesFPwdVerify';
import UserFPwdVerify from './Components/Verification/ForgetPasswordVerification/UserFPwdVerify';
import UserForgetPassword from './Components/FogetPassword/userForgetPasword/UserForgetPassword';
import OneCard from './Components/Home/OneCard/OneCard';
import LocationLink from './Components/Home/GoogleMap/LocationLink';
import BussinesEditPage from './Components/Home/BussinesProfile/BussinesEditPage';


function App() {
  return (
    <Router>
      <Routes>
        {/* User */}
        <Route path="/" element={<Login />} />
        <Route path="/Bubbles" element={<BubbleAnimation />} />
        <Route path="/SignUpPage" element={<SignUpPage />} />
        <Route path="/MobileVerification" element={<MobileVerification />} />
        <Route path="/UserForgetMobileVerification" element={<UserFPwdVerify />} />
        <Route path="/UserForgetPassword" element={<UserForgetPassword />} />
        <Route path="/BussinessLogin" element={<BussinessLogin />} />
        
        {/* Bussiness */}
        <Route path="/BussinesSignUp" element={<BussinesSignUp />} />
        <Route path="/BussinessMobileVerification" element={<BussinessMobileVErification />} />
        <Route path="/BussinessProfileCard" element={<BussinessProfileCard />} />
        <Route path="/BussinessForgetMobileVerification" element={<BussinessForgetMobileVerification />} />
        <Route path="/BussinessForgetPassword" element={<BussinessForgetPassword />} />


        {/* common */}
        <Route path="/Home" element={<Home showSideBar={true} />} />
        <Route path="/SideNavBar" element={<SideNavBar />} />
        <Route path="/BoostDetails" element={<BoostDetails />} />
        <Route path="/LocationLink" element={<LocationLink />} />
       
      
        
       
   
        {/* User Profile */}
        <Route path="/UserProfile" element={<WithHomeLayout component={<UserProfile />} />} />
        <Route path="/CompanyCard" element={<WithHomeLayout component={<CompanyCard />} />} />
        <Route path="/OneCard" element={<WithHomeLayout component={<OneCard />} />} />
        
        {/* Business Profile */}
        <Route path="/BussinessProfile" element={<WithHomeLayout component={<BussinessProfile />} />} />
        <Route path="/CustomerLeads" element={<WithHomeLayout component={<CustomerLeads />} showSideBar={false} />} />
        <Route path="/BussinessEditPage" element={<WithHomeLayout component={<BussinesEditPage />} showSideBar={false} />} />
      </Routes>
    </Router>
  );
}

function WithHomeLayout({ component, showSideBar = true }) {
  return <Home showSideBar={showSideBar}>{component}</Home>;
}

export default App;
