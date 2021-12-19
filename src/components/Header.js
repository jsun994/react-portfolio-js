import React, { useState } from 'react';
import background from '../assets/background.jpeg';
import Nav from './Nav.js';
import About from './About.js';
import ContactForm from './Contact.js';
import Portfolio from './Portfolio.js';
import Resume from './Resume.js';
import Footer from './Footer.js';

function Header() {
    const [current, change] = useState(false);

    const render = () => {
        switch(current) {
        case "about": 
        return <About></About>
        
        case "contact": 
        return <ContactForm></ContactForm>
        
        case "portfolio":
        return <Portfolio></Portfolio>

        case "resume":
        return <Resume></Resume>

        default:
        return <About></About>
        } 
    };

    return (
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            height:'164px' 
        }}>
            <Nav current={current} change={change}></Nav>
            <div>{ render() }</div>
            <Footer></Footer>
        </div>
        
    );
}

export default Header;