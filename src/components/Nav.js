import React from 'react';

function Nav (props) {
    
    return (
        <header>
            <h2>
                <a href="/">
                Jay Sun
                </a>
            </h2>

            <nav>
                <ul className="flex-row">
                    <li>
                        <a 
                            href="#about"
                            onClick={ () => props.change("about") }    
                        >
                            about
                        </a>
                    </li>

                    <li>
                        <a 
                            href="#contact"
                            onClick={ () => props.change("contact") }    
                        >
                            contact
                        </a>
                    </li>

                    <li>
                        <a 
                            href="#portfolio"
                            onClick={ () => props.change("portfolio") }    
                        >
                            portfolio
                        </a>
                    </li>

                    <li>
                        <a 
                            href="#resume"
                            onClick={ () => props.change("resume") }    
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