import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import { Route } from "react-router-dom";


 function App () {
    return (
      <div>
        <Nav />
            <Route exact path="/" component={Home} />   
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
            <Footer />
        
      </div>
  );
 }


 export default App;
 
