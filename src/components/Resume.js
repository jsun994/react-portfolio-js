import React from 'react';
import resume from '../assets/resume.pdf';

function Resume() {
    return (
        <section className="reSec">
            <h1 id="resume">resume</h1>
            <h2><a href={resume} className='res'>pdf</a></h2>
            <p>
                HTML, CSS, JavaScript, jQuery, React.js, Bootstrap, Bulma
            </p>
            <p>
                Node.js, Express.js, MySQL, MySQL2, MongoDB
            </p>
            <p>
                RESTful API, Handlebars.js
            </p>   
        </section>
    );
}

export default Resume;