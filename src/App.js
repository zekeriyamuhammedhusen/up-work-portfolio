import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Skills from './components/Skills';
import ProjectShowcase from './components/ProjectShowcase';
import UpworkRates from './components/UpworkRates';
import Process from './components/Process';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-main">
        <Hero />
        <Services />
        <About />
        <Skills />
        <ProjectShowcase />
        <UpworkRates />
        <Process />
      </main>
      <Footer />
    </div>
  );
}

export default App;
