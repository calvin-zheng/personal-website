import React, {Component} from 'react';
import './greeting.scss';

class Greeting extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="flex-container">
                    <p id="intro">Hi, my name is</p>
                    <p id="name">Calvin Zheng.</p>
                    <p className="brief-intro">I’m a computer science junior at the University of Michigan in Ann Arbor, MI,
                        interested in software engineering, web development, machine learning, and
                        natural language processing.</p>
                </div>
            </React.Fragment>
        )
    }
}

export default Greeting;
