import React from 'react';
import './App.css'
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualifications from './components/qualifications/Qualifications';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/footer/ScrollUp';

const App = () => {
  return (
    <>
      <Header/>

      <main className="main">
        <Home/>
        <About/>
        <Skills/>
        <Qualifications
        />
        <Contact/>
      </main>
      <Footer/>
      <ScrollUp/>
    </>
  )
}

export default App
