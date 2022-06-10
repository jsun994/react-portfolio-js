import React from 'react';
import coverImage from '../assets/photo-modified.png';

function About() {
  return (
    <section className="abSec">
      <h1 id="about">who am i?</h1>
        <div className="me">
          <div>
            <img src={coverImage} className="img" style={{ width: "14%" }} alt="cover"></img>
          </div>
          <div className="info">
            <p>
              I graduated from UC San Diego with a Bachelor of Science Degree in Management Science. Furthermore, I hold a Master's Degree in Accountancy from SDSU.
            </p>
            <p>
              I have experiences in Compliance Audits. I worked as a Tax Analyst Intern at Intuit, where I gained experience in Quality Assurance as well as Programming in Java.
            </p>
          </div>
        </div>
    </section>
  );
}

export default About;
