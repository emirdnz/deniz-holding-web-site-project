import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import InvestorRelations from './pages/InvestorRelations';
import Sustainability from './pages/Sustainability';
import Careers from './pages/Careers';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
           
            <Route path="/investor-relations" element={<InvestorRelations />} />
            <Route path="/sustainability" element={<Sustainability />} />
            
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;