import React, { useState } from 'react';
import Nav from './components/Nav.js';
import About from './components/About.js';
import ContactForm from './components/Contact.js';

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  return (  
    <div className="App">

      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>

      <main>
      {!contactSelected ? (
          <>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;