import React from 'react';
import proj1 from '../assets/ptblog.png';
import proj2 from '../assets/project01.png';
import proj3 from '../assets/bt.png';
import proj4 from '../assets/mov.png';
import proj5 from '../assets/project04.png';
import proj6 from '../assets/project05.png';

function Portfolio() {
    return (
        <section className="portSec">
            <h1>projects</h1>
                <div className="projects">

                    <div className="row-one">
                        <a href="https://tech-blog-pro.herokuapp.com/" className='one'>
                            <img src={proj1} style={{ width: "80%" }} alt="cover"></img>
                        </a>
                        
                        <a href="https://jsun994.github.io/password/" className='two'>
                            <img src={proj2} style={{ width: "80%" }} alt="cover"></img>
                        </a>
                    </div>

                    <div className='github'>
                        <h3><a href="https://github.com/jsun994/pro-tech-blog">github: pro tech blog</a></h3>
                        <h3><a href="https://github.com/jsun994/password">github: password generator</a></h3>
                    </div>
                    
                    <div className="row-two">
                        <a href="https://bt-pwa.herokuapp.com" className="three"> 
                            <img src={proj3} style={{ width: "80%" }} alt="cover"></img>
                        </a>
    
                        <a href="https://movie-shop-mern.herokuapp.com" className="four">
                            <img src={proj4} style={{ width: "80%" }} alt="cover"></img>
                        </a>
                    </div>

                    <div className='github'>
                        <h3><a href="https://github.com/jsun994/pwa-bt">github: budget tracker</a></h3>
                        <h3><a href="https://github.com/jsun994/movie-shop-mern">github: movie shop</a></h3>
                    </div>

                    <div className="row-three">
                        <a href="https://jsun994.github.io/daily-weather-forecast/" className="five">
                            <img src={proj5} style={{ width: "80%" }} alt="cover"></img>
                        </a>
    
                        <a href="https://jsun994.github.io/interactive-music-project/" className="six">
                            <img src={proj6} style={{ width: "80%" }} alt="cover"></img>
                        </a>
                    </div>

                    <div className='github'>
                        <h3><a href="https://github.com/jsun994/daily-weather-forecast">github: weather forecast</a></h3>
                        <h3><a href="https://github.com/jsun994/interactive-music-project">github: interactive music</a></h3>
                    </div>
                </div>
        </section>
    );
}

export default Portfolio;