import React, { useState } from 'react';
import Nav from './components/Nav.js';
import About from './components/About.js';
import ContactForm from './components/Contact.js';
import Portfolio from './components/Portfolio.js';

function App() {
  const [current, change] = useState(false);

  const render = () => {
    switch(current) {
      case "about": 
      return <About></About>
      
      case "contact": 
      return <ContactForm></ContactForm>
      
      case "portfolio":
      return <Portfolio></Portfolio>
      
      default:
      return <About></About>
    } 
  };

  return (
    <div className="App">

      <Nav current={current} change={change}></Nav>

      <main>
        {
          render()
        }
      </main>
    </div>
  );
}

export default App;