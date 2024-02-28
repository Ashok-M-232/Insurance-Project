// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/HomePage/Home';
import Property from './components/InsuranceForms/Property';
import SignInPopup from './SignInPage/SignInPopup';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<Property />} />
        <Route path="/signIn" element={<SignInPopup />} />
      </Routes>
    </Router>

    
  );
}

export default App;