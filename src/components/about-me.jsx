import React, {Component} from 'react';
import headshot from './headshot.jpeg';
import './about-me.scss';
import Fade from 'react-reveal';

class AboutMe extends Component {
    render() {
        return (
            <Fade bottom>
            <div className="about-me">
                <h1>About me</h1>
                <div className="about-me-flex-2">
                    <div className="about-me-text">
                        <p>Hello! I’m Calvin, a computer science junior at the University of Michigan. On campus, I am involved with Michigan Hackers and MPowered Entrepreneurship.</p>

                        <p>This summer, I am participating in an engineering co-op with Toyota North America,
                            focusing on developing new solutions for internal tools for virtual meetings and also
                            working to digitally optimize different parts of their supply chain process. </p>

                        <p>Recently, I have been working with the following technologies:</p>
                        <div className="tech-container">
                            <p>Java</p>
                            <p>Python</p>
                            <p>React</p>
                            <p>C++</p>
                            <p>C</p>
                            <p>HTML</p>
                            <p>Angular</p>
                        </div>
                    </div>
                    <img src={headshot} className="headshot" alt="Profile Picture"/>
                </div>
            </div>
            </Fade>
        );
    }
}

export default AboutMe;
