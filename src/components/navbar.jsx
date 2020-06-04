import React, {Component} from "react";
import './navbar.scss'
import logo from './c-logo.svg'

class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className = "navbar">
                    <div className = "nav-items">
                        <img src={logo} className="App-logo" alt="logo" id="logo"/>
                        <ul>
                            <li><a href="#" id="resume">Resume</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">Experience</a></li>
                            <li><a href="#">About</a></li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

export default NavBar;
