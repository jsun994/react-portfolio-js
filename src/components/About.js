import React from 'react';
import coverImage from '../assets/photo.jpg';

function About() {
  return (
    <section className="section">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="img" style={{ width: "14%" }} alt="cover" />
      <div className="info">
        <p>
          Hello, my name is Jay Sun. I am currently attending the UC Berkeley Coding Boot Camp.
          I graduated from UC San Diego with a Bachelor of Science Degree in Management Science. Furthermore, I hold a Master's Degree in Accountancy from SDSU.
          I am currently an Auditor, with experiences in Compliance Audits. I worked as a Tax Analyst Intern at Intuit, where I gained experience in Quality Assurance as well as Programming in Java.
        </p>
      </div>
    </section>
  );
}

export default About;