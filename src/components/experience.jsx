import React, {Component} from 'react';
import './experience.scss';

class Experience extends Component{
    render() {
        return (
            <div className="experience">
                <h1>Experience</h1>
                <div className="event-box">
                    <div className="event-title">
                        <h3>Engineering Development Co-op</h3>
                        <h3 className="time">Summer 2020</h3>
                    </div>
                    <p className="company">Toyota North America</p>
                    <p>I am working within the Purchasing Supplier Development Group at Toyota North America. I will be
                        assisting with the development of internal tools and working to digitally optimize their supply
                        chain process. </p>
                </div>
                <div className="event-box">
                    <div className="event-title">
                        <h3>Student Developer</h3>
                        <h3 className="time">Jan 2020 - Present</h3>
                    </div>
                    <p className="company">Toyota North America Multidisciplinary Project Team</p>
                    <p>Over the past few months, I have worked on optimizing Toyota North America’s supply chain process by creating a web application.
                        I have conducted user interviews, design reviews, and began developing the product through the use of Spring and Angular.
                        Additionally, my team is following Scrum/Agile methodologies through the creation of a
                        backlog and sprints with Jira. </p>
                </div>
                <div className="event-box">
                    <div className="event-title">
                        <h3>iOS Core Team Member</h3>
                        <h3 className="time">Feb 2019 - Present</h3>
                    </div>
                    <p className="company">Michigan Hackers</p>
                    <p>Using Swift and Figma, I collaborated with other members of the Michigan Hackers iOS Team to create PhotoSnipe, a virtual version of the game Assassin. I primarily worked with
                        obtaining camera access in the application and obtaining real-time data using Cloud
                        Firestore. </p>
                </div>
                <div className="event-box">
                    <div className="event-title">
                        <h3>Vice President of Strategy</h3>
                        <h3 className="time">Sept 2018 - Present</h3>
                    </div>
                    <p className="company">MPowered Entrepreneurship</p>
                    <p>Throughout my time with MPowered Entrepreneurship, I have been involved with the Makethon project.
                        Makeathon is a 36-hour long product design competition, focusing on voice technology, open product design, and autonomous vehicles. I helped secure over
                        $18,000 in sponsorship and hosted an event with 250+ participants. Currently,
                        I am tasked with helping make the logistics for MPowered’s events run more smoothly.</p>
                </div>
            </div>
        );
    }
}

export default Experience;
