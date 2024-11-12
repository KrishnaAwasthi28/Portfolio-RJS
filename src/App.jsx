import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home'
import Portfolio from './components/Portfolio';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import { useState } from 'react';

function App() {
  const[selectedTab,setSelectedTab]=useState("Home");
  return (
    <>
    <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Header>
    {selectedTab==="Home" && <Home setSelectedTab={setSelectedTab}></Home> }
    {selectedTab==="About" && <About></About>}
    {selectedTab==="Portfolio" && <Portfolio></Portfolio>}
    {selectedTab==="Services" && <Services></Services>}
    {selectedTab==="Contact" && <Contact></Contact>}
    {selectedTab==="Hire" && <Contact></Contact>}
    <Footer></Footer>
    </>
  );
}

export default App
