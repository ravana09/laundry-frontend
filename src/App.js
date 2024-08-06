
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/login/Login';
import BubbleAnimation from './Components/BubbleAnimation/BubbleAnimation';



function App() {
  return (
    <>
     
    <Router>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Bubbles" element={<BubbleAnimation />} />
    </Routes>
    </Router>

    </>
  );
}

export default App;
