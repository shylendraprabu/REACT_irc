import React from 'react';
import './assets/css/App.css';
// import Home from './Home';
// import PrimarySearchAppBar from './components/Main';
// import Login from './Login';
//import Home1 from './components/Home1';
//import Footer from './Footer';
// import Wikipedia from './Wikipedia';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Home1 from './components/Home1';
import PrimarySearchAppBar from './components/Main';
import Wikipedia from './Wikipedia';
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Home1" element={<Home1/>}/>
            <Route path="/PrimarySearchAppBar" element={<PrimarySearchAppBar/>}/>
            <Route path="/Wikipedia" element={<Wikipedia/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
// {/* <Home/> */}
// {/* <Wikipedia/> */}
// {/* <Login/> */}
// {/* <PrimarySearchAppBar/> */}
// {/* <Home1/>
// <Footer/> */}