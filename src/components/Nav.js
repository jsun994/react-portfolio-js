import React from 'react';

function Nav (props) {
    const {
        contactSelected,
        setContactSelected
    } = props;

    return (
        <header>
            <h2>
                <a href="/">
                Jay Sun
                </a>
            </h2>

            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about" onClick={() => setContactSelected(false)}>
                            about
                        </a>
                    </li>

                    <li className={`mx-2 ${contactSelected}`}>
                        <span onClick={() => setContactSelected(true)}>
                            <a href="#contact">
                                contact
                            </a>
                        </span>
                    </li>

                    <li>
                        <a href="#portfolio">
                            portfolio
                        </a>
                    </li>

                    <li>
                        <a href="#resume">
                            resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;