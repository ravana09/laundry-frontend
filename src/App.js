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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Bubbles" element={<BubbleAnimation />} />
        <Route path="/SignUpPage" element={<SignUpPage />} />
        <Route path="/MobileVerification" element={<MobileVerification />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/SideNavBar" element={<SideNavBar />} />
        <Route path="/CompanyCard" element={<WithHomeLayout component={<CompanyCard />} />} />
        <Route path="/BussinessProfile" element={<WithHomeLayout component={<BussinessProfile />} />} />
      </Routes>
    </Router>
  );
}

function WithHomeLayout({ component }) {
  return <Home>{component}</Home>;
}

export default App;
