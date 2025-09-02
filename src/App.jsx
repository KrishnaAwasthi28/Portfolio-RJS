import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home'
import Portfolio from './components/Portfolio';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import { useState } from 'react';
import Projects from './components/Projects';
import Education from './components/Education';

function App() {
  const[selectedTab,setSelectedTab]=useState("Home");
  return (
    <>
    <div id="root">
    <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Header>
    <main className="container my-5">
    {selectedTab==="Home" && <Home setSelectedTab={setSelectedTab}></Home> }
    {selectedTab==="About" && <About></About>}
    {selectedTab==="Skills" && <Portfolio></Portfolio>}
    {selectedTab==="Project" && <Projects/>}
    {selectedTab==="Certification" && <Services/>}
    {selectedTab==="Education" && <Education/>}
    {selectedTab==="Contact" && <Contact></Contact>}
    {selectedTab==="Hire" && <Contact></Contact>}
    </main>
    <Footer></Footer>
    </div>
    </>
  );
}

export default App
