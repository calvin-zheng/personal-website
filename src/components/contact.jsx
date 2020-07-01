import React, {Component} from "react";
import './contact.scss'
import Fade from 'react-reveal';

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <div className="contact-me">
                    <Fade bottom>
                    <h1>Get In Touch</h1>
                    <p>I'm currently looking for an internship for Summer 2021 and am excited for new opportunities. Feel free to contact me!</p>
                    <a href="mailto: calzheng@umich.edu">Contact Me</a>
                    </Fade>
                </div>
            </div>
        );
    }
}

export default Contact;
