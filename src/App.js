import "./App.css";
import Cookies from "js-cookie";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Components/login/Login";
import BubbleAnimation from "./Components/BubbleAnimation/BubbleAnimation";
import SignUpPage from "./Components/SignUp/SignUpPage";
import MobileVerification from "./Components/Verification/MobileVerification";
import SideNavBar from "./Components/Home/SideNavbar/SideNavBar";
import Home from "./Components/Home/Home/Home";
import CompanyCard from "./Components/Home/Card/Card";
import BussinessProfile from "./Components/Home/BussinesProfile/BussinessProfile";

import BussinessProfileCard from "./Components/Home/BussinesProfile/BussinesProfileCard";
import UserProfile from "./Components/Home/UserProfile/UserProfile";
import BoostDetails from "./Components/Home/BussinesProfile/BoostDetails";
import BussinessLogin from "./Components/login/BussinessLogin";
import BussinesSignUp from "./Components/SignUp/BussinesSignUp";
import BussinessMobileVErification from "./Components/Verification/BussinessMobileVErification";
import BussinessForgetPassword from "./Components/FogetPassword/BusinessForgetPassword/BusinessForgetePAssword";
import BussinessForgetMobileVerification from "./Components/Verification/ForgetPasswordVerification/BussinesFPwdVerify";
import UserFPwdVerify from "./Components/Verification/ForgetPasswordVerification/UserFPwdVerify";
import UserForgetPassword from "./Components/FogetPassword/userForgetPasword/UserForgetPassword";
import OneCard from "./Components/Home/OneCard/OneCard";
import LocationLink from "./Components/Home/GoogleMap/LocationLink";
import BussinesEditPage from "./Components/Home/BussinesProfile/BussinesEditPage";
import EditUserProfile from "./Components/Home/UserProfile/EditUserProfile";
import { useEffect, useState } from "react";

import Analysispage from "./Components/Home/BussinesProfile/AnalysisPage/Analysispage";
import LeadsContainer from "./Components/Home/BussinesProfile/LeadsContainer/LeadsContainer";
import CustomerLeads from "./Components/Home/BussinesProfile/CustomerLeads/CustomerLeads";
import AllAnalysisPage from "./Components/Home/BussinesProfile/AnalysisPage/AllAnalysisPage/AllAnalysisPage";
import ReportsPage from "./Components/Home/BussinesProfile/ReportsPage/ReportsPage";
import AllReportsPage from "./Components/Home/BussinesProfile/ReportsPage/AllReportsPage";
import PopupCard from "./Components/Home/PopupCard/PopupCard";
import DefaultPage from "./Components/DefaultPage/DefaultPage";

function App() {
  const [AccountType, setAccountType] = useState(Cookies.get("AccountType"));
  const navigate = useNavigate();

  useEffect(() => {
    const accountToken = Cookies.get("AccountToken");
    const accountType = Cookies.get("AccountType");

    if (accountToken === "USerTokenpoiuytrewq" && accountType === "user") {
      navigate("/CompanyCard");
    } else if (accountToken === "BusinessTokenqwertyuiop" && accountType === "Bussiness") {
      navigate("/BussinessProfile");
    }
  }, []);

  // const location = useLocation();

  
  // useEffect(() => {

  //   localStorage.setItem("lastPath", location.pathname);
  // }, [location.pathname]);


  // useEffect(() => {
  //   const accountToken = Cookies.get("AccountToken");
  //   const accountType = Cookies.get("AccountType");
  //   const lastPath = localStorage.getItem("lastPath");

   
  //   if (lastPath && lastPath !== "/") {
  //     navigate(lastPath);
  //   } else {
    
  //     if (accountToken === "USerTokenpoiuytrewq" && accountType === "user") {
  //       navigate("/CompanyCard");
  //     } else if (accountToken === "BusinessTokenqwertyuiop" && accountType === "Bussiness") {
  //       navigate("/BussinessProfile");
  //     }
  //   }
  // }, [navigate]);

  

  return (
    <Routes>
      {/* Common Routes */}
      <Route path="/Login" element={<Login />} />
      <Route path="/" element={<DefaultPage />} />
      <Route path="/Bubbles" element={<BubbleAnimation />} />
      <Route path="/SignUpPage" element={<SignUpPage />} />
      <Route path="/MobileVerification" element={<MobileVerification />} />
      <Route path="/Home" element={<Home showSideBar={true} />} />
      <Route path="/SideNavBar" element={<SideNavBar />} />
      <Route path="/BussinesSignUp" element={<BussinesSignUp />} />
      <Route path="/BussinessLogin" element={<BussinessLogin />} />
      <Route path="/LocationLink" element={<LocationLink />} />
      <Route path="/OneCard" element={<WithHomeLayout component={<OneCard />} />} />
      <Route path="/BussinessMobileVerification" element={<BussinessMobileVErification />} />
      <Route path="/BussinessForgetMobileVerification" element={<BussinessForgetMobileVerification />} />
      <Route path="/BussinessForgetPassword" element={<BussinessForgetPassword />} />
      <Route path="/UserForgetMobileVerification" element={<UserFPwdVerify />} />
      <Route path="/UserForgetPassword" element={<UserForgetPassword />} />

      {/* Routes for User */}
      {AccountType === "user" && (
        <>
          <Route path="/UserProfile" element={<WithHomeLayout component={<UserProfile />} />} />
          <Route path="/CompanyCard" element={<WithHomeLayout component={<CompanyCard />} showSideBar={false}  />} />
          <Route path="/EditUserProfile" element={<WithHomeLayout component={<EditUserProfile />} />} />
          <Route path="/PopupCard" element={<WithHomeLayout component={<PopupCard />} />} />
        </>
      )}

      {/* Routes for Business */}
      {AccountType === "Bussiness" && (
        <>
          <Route path="/BoostDetails" element={<BoostDetails />} />
          <Route path="/BussinessProfileCard" element={<BussinessProfileCard />} />
          <Route path="/BussinessProfile" element={<WithHomeLayout component={<BussinessProfile />} />} />
          <Route path="/LeadsContainer" element={<WithHomeLayout component={<LeadsContainer />} />} />
          <Route path="/AllAnalysisPage" element={<WithHomeLayout component={<AllAnalysisPage />} />} />
          <Route path="/ReportsPage" element={<WithHomeLayout component={<ReportsPage />}  />} />
          <Route path="/AllReportsPage" element={<WithHomeLayout component={<AllReportsPage />} showSideBar={false}  />} />
          <Route path="/CustomerLeads" element={<WithHomeLayout component={<CustomerLeads />} showSideBar={false} />} />
          <Route path="/BussinessEditPage" element={<WithHomeLayout component={<BussinesEditPage />} />} />
        </>
      )}
    </Routes>
  );
}

function WithHomeLayout({ component, showSideBar = true }) {
  return <Home showSideBar={showSideBar}>{component}</Home>;
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
