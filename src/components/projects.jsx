import React, {Component} from 'react';
import './projects.scss';

class Projects extends Component {
    render() {
        return (
            <div className="projects">
                <h1>Projects</h1>
                <div className="projects-container">
                    <div className="project-box">
                        <h3>Minecraft Block Palette</h3>
                        <p>This is currently a work in progress, but it will be a website used by Minecraft builders to showcase what blocks they build with</p>
                    </div>
                    <div className="project-box">
                        <h3>MusicGen</h3>
                         <p>Music writing software written using Python, with automatic beat detection and audio functionality with PyAudio</p>
                    </div>
                    <div className="project-box">
                        <h3>ParkSmart</h3>
                        <p>Developed a prototype for a crowd-sourced parking spot availability application using Adobe XD and Swift
                        </p>
                    </div>
                    <div className="project-box">
                        <h3>RecipE-Z</h3>
                        <p>Developed a cooking video game accessible to those with visual impairments, specifically color blindness.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
