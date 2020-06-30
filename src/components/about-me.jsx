import React, {Component} from 'react';
import headshot from './headshot.jpeg';
import './about-me.scss';

class AboutMe extends Component {
    render() {
        return (
            <div className="about-me">
                <h1>About me</h1>
                <div className="about-me-flex-2">
                    <div className="about-me-text">
                        <p>Hello! I’m Calvin, a computer science junior at the University of Michigan. On campus, I am involved with Michigan Hackers and MPowered Entrepreneurship.</p>

                        <p>This summer, I am participating in an engineering co-op with Toyota North America,
                            focusing on developing new solutions for internal tools for virtual meetings and also
                            working to digitally optimize different parts of their supply chain process. </p>

                        <p>Recently, I have been working with the following technologies:</p>
                    </div>
                    <img src={headshot} className="headshot" alt="Profile Picture"/>
                </div>
            </div>
        );
    }
}

export default AboutMe;
