import React from 'react';

function Nav (props) {
    
    return (
        <header className="name">
            <h2>
                <a 
                    href="#about"
                    className='js'
                    onClick={ () => props.change("about") }
                >
                    JAY SUN
                </a>
            </h2>

            <nav>
                <ul className="flex-row">
                    <li>
                        <a 
                            href="#about"
                            onClick={ () => props.change("about") }
                            className={ props.current === "about" ? "active" : "link" }
                        >
                            about
                        </a>
                    </li>

                    <li>
                        <a 
                            href="#contact"
                            onClick={ () => props.change("contact") }
                            className={ props.current === "contact" ? "active" : "link" }   
                        >
                            contact
                        </a>
                    </li>

                    <li>
                        <a 
                            href="#portfolio"
                            onClick={ () => props.change("portfolio") }  
                            className={ props.current === "portfolio" ? "active" : "link" }  
                        >
                            portfolio
                        </a>
                    </li>

                    <li>
                        <a 
                            href="#resume"
                            onClick={ () => props.change("resume") }
                            className={ props.current === "resume" ? "active" : "link" }  
                        >
                            resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;